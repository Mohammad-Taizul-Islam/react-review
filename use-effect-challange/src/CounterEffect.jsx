import { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
      document.title = `count : ${count}`
    },[count])
  return (
    <div>
        <h1>Count outside useEffect  : {count}</h1>
      <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}

export default CounterEffect
