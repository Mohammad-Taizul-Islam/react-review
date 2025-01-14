import {useState} from 'react'

const ExampleTwo = () => {

    const [randomNumber,setRandomNumber] = useState(()=>{
        Math.floor(Math.random()*100);
    })

    const onClickHandler = () => {
        setRandomNumber( Math.floor(Math.random()*100));
    }
  return (
    <div>
      <p>Random Number : {randomNumber} </p>
      <button type="button" onClick={onClickHandler}>Random Number</button>
    </div>
  )
}

export default ExampleTwo
