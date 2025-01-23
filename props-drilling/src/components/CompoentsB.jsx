import React from 'react'
import ComponentC from './ComponentC'

const CompoentsB = ({name}) => {
  return (
    <div>
      <span>Component B {name} </span>
      <ComponentC name={name}/>
    </div>
  )
}

export default CompoentsB
