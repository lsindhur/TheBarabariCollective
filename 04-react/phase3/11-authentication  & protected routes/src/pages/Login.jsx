import React from 'react'
import { useState } from 'react'
import { useAuth } from '../Context/AuthContext'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Login = () => {
    const [name, setName] = useState('')
    const auth = useAuth();
    const navigate = useNavigate();
   const location = useLocation();
  // console.log('location from login page:',location)

    const redirectPath = location.state?.path || '/'


    const handleLogin = (name) => {
        auth.login(name);
        navigate(redirectPath, {replace:true})
        setName('')
    }

   /*  useEffect(() => {
        console.log('updated name:',auth.user)
    },[auth.user]) */

  return (
     <div className='center-page'>
        <div>
        <h2>Welcome Back</h2>
        <input 
        type='text'
        placeholder='Enter Your Name'
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <button
        onClick={() => handleLogin(name)}
        >Login</button>
        </div>
    </div>
  )
}

export default Login