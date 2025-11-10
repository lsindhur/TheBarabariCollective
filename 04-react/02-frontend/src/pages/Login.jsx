import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Login.css'


const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
      console.log(e.target.value);
      const {name,value} = e.target
      
      setFormData(prev => ({
        ...prev,
        [name] : value
      }))
  }

  const validateCheck = () => {
    const newErrors = {}

    if(!formData.email) {
      newErrors.email = 'Email is required';
    }

    if(!formData.password) {
        newErrors.password = 'Password is required'
    } else if(formData.password.trim().length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0; //returns true if no errors
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateCheck()) return;

    
  }

  return (
     <div className="login-container">
      <div className="login-card">
          <h2>Login to Citizen Resolution</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type='email' />
        {
          errors.email &&
          <span className="error-text">{errors.email}</span>
        }
          </div>
           <div className="form-group">
         <label htmlFor="password">Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        {
          errors.password &&
          <span className="error-text">{errors.password}</span>
        }
         </div>
        <button type="submit" className="login-btn">Login</button>
        
      </form>
      
      <div className="login-footer">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Login