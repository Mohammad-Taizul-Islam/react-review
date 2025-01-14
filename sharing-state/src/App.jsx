import  { useState } from 'react'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

const App = () => {

  
  const [count , setCount] = useState;
  return (
    <div>
      <ComponentOne count={count} setCount={setCount}  onClickHandler = {()=>{count+1}} />
      <ComponentTwo count={count} setCount={setCount}   onClickHandler = {()=>{count+1}}/>
    </div>
  )
}

export default App
