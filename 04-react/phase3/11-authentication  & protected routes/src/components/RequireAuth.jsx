import React from 'react'
import { useAuth } from '../Context/AuthContext'
import {Navigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'


const RequireAuth = ({children}) => {
    const location = useLocation()
    const auth = useAuth();
    //console.log(location)

  return (
    <>
    {
        auth.user?
        children : 
        <Navigate to='/login' state={{path:location.pathname}}/>
    }
    </>
  )
}

export default RequireAuth