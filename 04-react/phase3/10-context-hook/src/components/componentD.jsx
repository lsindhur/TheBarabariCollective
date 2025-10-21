import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/Context'

const componentD = () => {
    const user = useContext(UserContext)
  return (
    <div className='box'>
        <h1>componentD</h1>
        <h2>Bye {user}</h2>
    </div>
  )
}

export default componentD