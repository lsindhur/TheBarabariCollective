import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const auth = useAuth();
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout();
        navigate('/')
    }

  return (
    <nav>
        <div>
            <Link to='/'>Auth Demo</Link>
        </div>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/dashboard'>Dashboard</Link>
            {
                auth.user?
                (
                <>
                <span>{auth.user}</span>
                <button onClick={handleLogout}>Logout</button>
                </>
                )
                 :
                (<Link to='/login'>Login</Link>)
            }
            
        </div>
    </nav>
  )
}

export default Navbar