import React from "react";

const StyledCard = () => {
  const cardStyle = {
    backgroundColor  : "lightblue",
    padding : "20px",
    borderRadius: "10px",
    color: "darkblue",
  };
  return (
    <div style={ cardStyle }>
      <h1>Title Of Style Card</h1>
      <p>Descriptions of Styled Card</p>
    </div>
  );
};

export default StyledCard;
