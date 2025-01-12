import {useState} from 'react'
import ButtonChild from './ButtonChild'
const ButtonParent = (dataFromParentComponent) => {
    const [message, setMessage] = useState("");
    const handleDataFromChild = (data) => {
        setMessage(data+" From Parent");
        dataFromParentComponent(data);
    };
  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data From Child :{message} </p>
        <ButtonChild sendDataToParent={handleDataFromChild} />
    </div>
  )
}

export default ButtonParent
