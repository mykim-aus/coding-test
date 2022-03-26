import AutoCorrect from "./components/AutoCorrect";
import Inventory from "./components/Inventory"

import './App.css';

function App() {
  const corrections = {
    'reley' : 'really',
    'rect' : 'react'
  }

  return (
    <div className="App">
      <AutoCorrect corrections={corrections}/>
      <Inventory/>
    </div>
  );
}

export default App;
