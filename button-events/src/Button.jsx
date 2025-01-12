import React, { useState } from "react";

const Button = () => {
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Click me</button>
        <p>Btton Clicked {clickCount} times</p>
      </div>
    </div>
  );
};

export default Button;
