import {useState,useEffect} from 'react'

const UseEffect = () => {
    const [count,setCount] =useState(0);

    useEffect(()=>{
        console.log("UseEffect Calling");
        document.title = {count};
    })
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>Click</button>
    </div>
  )
}

export default UseEffect
