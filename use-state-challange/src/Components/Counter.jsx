import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const InhandleClick = () =>{
        setCount(count+1);
    }

    const DhandleClick = () =>{
        setCount(count>0 ? count-1:count);
    }
  return (
    <div>
      <h1>Counter Components</h1>
      <p> Counter Is : {count}</p>
      <button type='button' onClick={InhandleClick}>Increment</button>
      <button type='button' onClick={DhandleClick}>Decrement</button>
    </div>
  )
}

export default Counter
