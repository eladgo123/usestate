
import './App.css';
import Counter from './Counter';
import { useState } from "react";


function App() {
  const[delta, setDelta] = useState(1) 
  const[MaxNum, setMaxNum] = useState(10) 
  function handleDelta(e){
      console.log(e)
      setDelta(Number(e.target.value))
  }
  function MaximumNumber(e){
      setMaxNum(e.target.value)
  }
  return (
    <div className="App">
      <h1>Usestate</h1>
      <input type="number" value={delta} onChange={handleDelta}/>
      <input type="number" value={MaxNum} onChange={MaximumNumber}/> 
      
      <Counter delta = {delta} MaxNum={MaxNum}/>
      <Counter delta = {delta} MaxNum={MaxNum}/>
    </div>
  );
}

export default App;
