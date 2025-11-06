import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import {useAuth} from '../context/AuthContext'

const Navbar = () => {
  const {user} = useAuth();
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-brand">
                <Link to='/' className='brand-link'>
                  <span className="brand-icon">🏛️</span>
                  <span className="brand-text">CitiSolve</span>
                </Link>
            </div>

            <div className="navbar-menu">
              {
                user &&
                <>
                <Link to='/submit-complaint' className='nav-link'>Submit Complaint</Link>
                <button className='nav-link active'>My Complaints</button>
              </>
              }
              
            </div>

            <div className="auth-buttons">
                <Link to="/login" className="auth-btn login-btn">Login</Link>
                <Link to="/register" className="auth-btn register-btn">Register</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar