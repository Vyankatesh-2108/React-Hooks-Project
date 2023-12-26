import React, { useState } from 'react'

function Counter() {

  let [count, setCounter] = useState(5)

  function add() {
    setCounter(count+1);
  }

  function sub(){
    if(count > 0)
    setCounter(count-1);
    else  
    alert("stop decrease")
  }

  return (
    <div>
      <h1>Counter Application</h1>
      <label>Values : {count}</label><br/>
      <button type='submit' onClick={add}>Increase</button>
      <button type='submit' onClick={sub}>Decrease</button>
    </div>
  )
}

export default Counter;