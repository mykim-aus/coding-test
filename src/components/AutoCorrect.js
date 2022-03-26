import React, {useState} from 'react'

function AutoCorrect({corrections}) {
    const [text,setText] = useState('')

    const checkText = (event) => {
        let string = event.target.value

        // string을 체크하는 로직 
        const correctionsArr = Object.keys(corrections)
        const splitString = string.split(" ")
        const lastWord = splitString[splitString.length - 1]

        if(correctionsArr.includes(lastWord)) {
            string = string.replace(lastWord,corrections[lastWord])
        }

        setText(string)
    }

    return (
        <div>
            <textarea rows="10" value={text} onChange={checkText} />
        </div>
    )
}

export default AutoCorrect
