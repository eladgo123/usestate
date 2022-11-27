import { useState } from "react";

function Counter(props) {
    const {delta} = props
    const {MaxNum} = props
    const[count, setCount] = useState(1)
    
    function incr(){
        setCount(
            function(oldCount){ 
              if(oldCount + delta < MaxNum){ 
                return oldCount + delta}
              return 0 
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
    return (
      <div >
        <h1>Counter</h1>
        
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {delta} to counter</button>
        <button onClick={rese}>reset</button>
      </div>
    );
  }
  
  export default Counter;