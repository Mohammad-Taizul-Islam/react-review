
const ButtonChild = ({sendDataToParent}) => {
    const handleClick = () => {
        console.log("Button clicked");
        const data = "Hello Parent from Child";
         sendDataToParent(data);
    };
  return (
    <div>
      <div>
        <button onClick={handleClick}>
            Click me
        </button>
      </div>
    </div>
  )
}

export default ButtonChild
