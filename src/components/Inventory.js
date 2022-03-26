import React, {useState} from 'react'

function Inventory() {
    const [inventoryArr,setInventoryArr] = useState([])
    const [result,setResult] = useState('')

    const showString = (str) => {
        const firstWord = str.split(" ")[0]
        const secondWord = str.split(" ")[1]
        let inventoryList = inventoryArr;

        if (firstWord === "add") {
            inventoryList.push(secondWord)
        } else if (firstWord === "remove") {
            inventoryList = inventoryList.filter((item)=>{
                return item != secondWord
            })
        } else {
            alert("Oops")
            return false
        }

        setInventoryArr(inventoryList)
        setResult(inventoryList.join(','))
    }

    const handleKeypress = (event) => {
        if(event.key === "Enter") {
            showString(event.target.value);
        }
    }
    return (
        <div>
            <input type="text" onKeyPress={handleKeypress} />
            <p>{result}</p>
        </div>
    )
}

export default Inventory
