import React from 'react'

const Greet = () => {
    const greet = "Hello";
    const date = new Date();
  return (
    <div>

    <h1>{greet}</h1>
    <p>Date : {date}</p>
    </div>
  )
}

export default Greet
