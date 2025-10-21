import React, { useState } from 'react'
import ComponentB from './componentB'
import { UserContext } from '../context/Context.jsx'

const componentA = () => {
    const [user, setUser] = useState('sindhura')
  return (
    <div className='box'>
        <h1>componentA</h1>
        <h2>Hello {user}</h2>
        <UserContext.Provider value={user}>
        <ComponentB/>
        </UserContext.Provider>
    </div>
  )
}

export default componentA