import { useState } from "react";

function Counter() {
    const[count, setCount] = useState(1)
    const[delta, setDelta] = useState(1) 
    function incr(){
        setCount(
            function(oldCount){ 
                return oldCount + delta
            } 
        )
        console.log(count)  
    }    
    function rese(){
          setCount(
              function(res0){
                return 0
              }
          )
    }
    function handleDelta(e){
        console.log(e)
        setDelta(Number(e.target.value))
    }
    return (
      <div >
        <h1>Counter</h1>
        <input type="number" value={delta} onChange={handleDelta}/>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {delta} to counter</button>
        <button onClick={rese}>reset</button>
      </div>
    );
  }
  
  export default Counter;