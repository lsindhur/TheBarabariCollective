    import React, { useEffect, useState } from 'react'
    import '../styles/Registration.css'
    import {useAuth} from '../context/AuthContext.jsx'
    import {useNavigate} from 'react-router-dom'

    const Registration = () => {
    
        const [formData, setFormData] = useState({
            name:'',
            email:'',
            password:'',
            confirmPassword:'',
            role:'citizen'
        })

        const {login,user} = useAuth()

        const [errors, setErrors] = useState({})
        const navigate = useNavigate();

        const handleChange = (e) => {
                //console.log(e.target);
                 setFormData(prev => ({
                    ...prev,
                    [e.target.name]:e.target.value,
                })) 

                //clear the error when the user starts typing
                if(errors[e.target.name]) {
                    setErrors(prev => ({
                        ...prev,
                        [e.target.name] : ''
                    }))
                }

        }

        const validateForm = () => {
            const newErrors = {}

            //validate name
            if(formData.name.trim() === '') {
                newErrors.name = 'Full name is required'
            } else if(formData.name.trim().length<2) {
                newErrors.name = 'Name must be at least 2 characters long'
            }

            //email errors
            if(formData.email.trim() === '') {
                newErrors.email = 'Email is required'
            }

            //password
             if(formData.password.trim() === '') {
                newErrors.password = 'Password is required'
            } else if(formData.password.trim().length <6 ) {
                newErrors.password = 'Password must be at least 6 characters long';
            }

            //confirmPassword
            if(formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword =  "Passwords do not match"

            }

            setErrors(newErrors)

            return Object.keys(newErrors).length === 0; //returns true when there are no errors 


        }

        const handleSubmit = (e) => {
            e.preventDefault();

           if(!validateForm()) return;

           //send the data to the backend database
            login(formData.name);
            navigate('/')
        }
        

     return (
        <div className="register-container">
            <div className="register-card">
                <h2>Create Account</h2>
                <p className="register-subtitle">Join our citizen resolution system</p>
                
                
                <form className="register-form" onSubmit={handleSubmit}>

                    {/* Name*/}
                        <div className="form-group">
                            <label>Full Name</label>
                            <input 
                            type="text"
                            placeholder="Enter your full name"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            />
                            {
                                errors.name && <span className='error-text '>{errors.name}</span>
                            }
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label>Email Address</label>
                            <input 
                            name='email'
                            type="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                             onChange={handleChange}
                            />
                            {
                                errors.email && <span className='error-text '>{errors.email}</span>
                            }
                        </div>

                        {/* Role */}
                        <div className="form-group">
                            <label>Role</label>
                            <select
                            name='role'
                           value={formData.role}
                            onChange={handleChange}
                            >
                                <option>Citizen</option>
                                <option>Admin</option>
                            </select>
                        </div>

                        {/*password */}
                        <div className="form-group">
                            <label>Password</label>
                            <input
                            type="password"
                            name='password'
                            value={formData.password}
                             onChange={handleChange}
                            />
                             {
                                errors.password && <span className='error-text '>{errors.password}</span>
                            }
                        </div>

                        {/*confirm password */}
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                            type="password"
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            />
                            {
                                errors.confirmPassword && <span className='error-text '>{errors.confirmPassword}</span>
                            }
                        </div>
                                
                        <button className="register-btn" >Create Account</button>
                </form>

                <div className="login-link">
                        Already have an account?<a href='/login'>Sign In</a>
                </div>
            </div>
        </div>
    )
    }

    export default Registration