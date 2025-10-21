import React from 'react'
import ComponentC from './componentC'

const componentB = () => {
  return (
    <div className='box'>
         <h1>componentB</h1>
         <ComponentC/>
    </div>
  )
}

export default componentB