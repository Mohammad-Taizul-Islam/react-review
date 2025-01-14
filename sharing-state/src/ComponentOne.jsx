import React from 'react'

const ComponentOne = ({count ,onCLickHandler}) => {
  return (
    <div>
      <p>Count : {count} </p>
        <button onClick={onCLickHandler}>Increment</button>
    </div>
  )
}

export default ComponentOne
