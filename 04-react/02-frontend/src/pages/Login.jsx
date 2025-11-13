import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Login.css'
import { authAPI } from '../services/api.js'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'


const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const {login} = useAuth();
  
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();

  //formData = {email:"x@amazon.com",password:123}
  const handleChange = (e) => {
      //console.log(e.target.value);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if(!validateCheck()) return;
    setIsLoading(true)
    try {
      const response = await authAPI.login(formData) //FormData //from the browser
    //console.log(response) //response = {token:xx, user:{email,id,name,role}}
    localStorage.setItem("token",response.token)
    localStorage.setItem("userRole",response.user.role)
    localStorage.setItem("userName",response.user.name)
    localStorage.setItem("userId",response.user._id)

    login(response.user.name)

    
    navigate('/my-complaints')
    
    } catch (error) {
     // console.log(error.message);
      setErrorMessage(error.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false)
    }
    
    
  }

  return (
     <div className="login-container">
      <div className="login-card">
          <h2>Login to Citizen Resolution</h2>

       {errorMessage && <div className="error-message">{errorMessage}</div>}

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
        <button type="submit" className="login-btn">{isLoading? "Logging in..." :"Login"}</button>
        
      </form>
      
      <div className="login-footer">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Login