import React from 'react'
import CompoentsB from './CompoentsB'

const ComponentA = ({name}) => {
  return (
    <div>
      <h1>Component A {name}</h1>
      <CompoentsB name={name}/>
    </div>
  )
}

export default ComponentA
