import { useState, useEffect } from "react";

const BasicEffect = () => {
  const greeting = "Hello Aklima";
  useEffect(() => {
    console.log("Mount the component...");
  });
  return <div>
    <h1>{greeting}</h1>
  </div>;
};

export default BasicEffect;
