import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react';
import '../styles/ComplaintForm.css'
import { ComplaintAPI } from '../services/api';


const ComplaintForm = () => {
    const navigate = useNavigate()
      const [complaintData, setComplaintData] = useState({
    name: '',
    ward: '',
    location: '',
    category: '',
    description: '',
    photo: null
  });

   const [errors, setErrors] = useState({});
   const [isLoading, setIsLoading] = useState(false)

     // State for error/success messages
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Categories for dropdown
  const categories = [
    'Roads & Infrastructure',
    'Water Supply',
    'Sanitation & Waste',
    'Street Lighting',
    'Public Safety',
    'Environmental Issues',
    'Noise Pollution',
    'Other'
  ];

  const handleChange = (e) => {
    setComplaintData(prev => ({
        ...prev,
        [e.target.name] : e.target.value
    }))

      if (errors[e.target.name]) {
      setErrors(prev => ({
        ...prev,
        [e.target.name]: ''
      }));
    }
  }

  const handlePhotoChange = (e) => {
     // console.log('photo files',e.target.files)
      console.log(e.target.files[0]);

      const file = e.target.files[0];

      //if file is not image, show error
      if(!file.type.startsWith('image/')) {
        setErrors(prev => ({
          ...prev,
          photo:'Please select an image file'
        }))

        return;
      }

      //if file size is > 5MB, show error

      if(file.size > 5 * 1024 * 1024) {
          setErrors(prev => ({
          ...prev,
          photo : 'Image size should be less than 5MB'
        }))

         return;
      } 
        //if image size is valid, update state
        setComplaintData(prev => ({
          ...prev,
          photo : e.target.files[0]
        }))

        setErrors(prev => ({
          ...prev,
          photo:''
        }))
      
  }


   const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!complaintData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (complaintData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Ward validation
    if (!complaintData.ward.trim()) {
      newErrors.ward = 'Ward is required';
    }

    // Location validation
    if (!complaintData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    // Category validation
    if (!complaintData.category) {
      newErrors.category = 'Please select a category';
    }

    // Description validation
    if (!complaintData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (complaintData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters long';
    }

    // Update error state
    setErrors(newErrors);

    // If no errors → form is valid
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

     if (!validateForm()) {
      return;
    }

    setIsLoading(true)
    
    try {
      const formDataToSend = new FormData(); //{} //but it will have some special qualities

      formDataToSend.append('name', complaintData.name.trim());
      formDataToSend.append('ward', complaintData.ward.trim());
      formDataToSend.append('location', complaintData.location.trim());
      formDataToSend.append('category', complaintData.category);
      formDataToSend.append('description', complaintData.description.trim());
      if (complaintData.photo) {
        formDataToSend.append('photo', complaintData.photo);
      }


      const response = await ComplaintAPI.createComplaint(formDataToSend)
      console.log(response)

       setSuccessMessage('Complaint submitted successfully! Redirecting to your complaints...');

        setTimeout(() => {
        navigate('/my-complaints');
      }, 10000);

    } catch (error) {
        console.log(error.message)
        setErrorMessage(error.message || "Failed to submit complaint. Please try again.")
    } finally {
      setIsLoading(false)
    }

  }

  return (
     <div className="complaint-form-container">
      <div className="complaint-form-card">
        <h2>Submit a Complaint</h2>
        <p className="form-subtitle">
          Help us improve your community by reporting issues that need attention
        </p>

        {/* Show error or success messages */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        {/* Complaint Form */}
        <form onSubmit={handleSubmit} className="complaint-form">
          
          {/* Name Input */}
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={complaintData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          {/* Ward Input */}
          <div className="form-group">
            <label htmlFor="ward">Ward *</label>
            <input
              type="text"
              id="ward"
              name="ward"
              value={complaintData.ward}
              onChange={handleChange}
              className={errors.ward ? 'error' : ''}
              placeholder="Enter your ward number or name"
            />
            {errors.ward && <span className="error-text">{errors.ward}</span>}
          </div>

          {/* Location Input */}
          <div className="form-group">
            <label htmlFor="location">Location *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={complaintData.location}
              onChange={handleChange}
              className={errors.location ? 'error' : ''}
              placeholder="Enter specific location (street, landmark, etc.)"
            />
            {errors.location && <span className="error-text">{errors.location}</span>}
          </div>

          {/* Category Dropdown */}
          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={complaintData.category}
              onChange={handleChange}
              className={`${errors.category ? 'error' : ''} ${complaintData.category ? 'has-value' : ''}`}
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Show selected category */}
            {complaintData.category && (
              <div className="selected-category">
                Selected: <strong>{complaintData.category}</strong>
              </div>
            )}

            {errors.category && <span className="error-text">{errors.category}</span>}
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={complaintData.description}
              onChange={handleChange}
              className={errors.description ? 'error' : ''}
              placeholder="Describe the issue in detail..."
              rows="5"
            />
            {errors.description && <span className="error-text">{errors.description}</span>}
          </div>

          {/* Photo Upload */}
          <div className="form-group">
            <label htmlFor="photo">Photo (Optional)</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className="file-input"
            />
            {errors.photo && <span className="error-text">{errors.photo}</span>}
            <small className="photo-hint">
              Upload a photo to help us better understand the issue. 
              Supported formats: JPG, PNG, GIF. Max size: 5MB.
            </small>
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => navigate('/my-complaints')}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary" 
              
            >
             {
              isLoading? "Submitting" : "Submit Complaint"
             }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ComplaintForm