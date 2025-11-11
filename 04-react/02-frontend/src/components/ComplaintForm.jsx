import React from 'react'
import {UNSAFE_ErrorResponseImpl, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react';
import '../styles/ComplaintForm.css'
import { ComplaintAPI } from '../services/api';


const ComplaintForm = () => {
    const navigate = useNavigate()
      const [formData, setFormData] = useState({
    name: '',
    ward: '',
    location: '',
    category: '',
    description: '',
    photo: null
  });

   const [errors, setErrors] = useState({});

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
    setFormData(prev => ({
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
        setFormData(prev => ({
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
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Ward validation
    if (!formData.ward.trim()) {
      newErrors.ward = 'Ward is required';
    }

    // Location validation
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    // Category validation
    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters long';
    }

    // Update error state
    setErrors(newErrors);

    // If no errors → form is valid
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault()

     if (!validateForm()) {
      return;
    }
    
    try {
      const formDataToSend = new FormData(); //{}

      formDataToSend.append('name', formData.name.trim());
      formDataToSend.append('ward', formData.ward.trim());
      formDataToSend.append('location', formData.location.trim());
      formDataToSend.append('category', formData.category);
      formDataToSend.append('description', formData.description.trim());
      if (formData.photo) {
        formDataToSend.append('photo', formData.photo);
      }


      const response = await ComplaintAPI.createComplaint(formDataToSend)
      console.log(response)
    } catch (error) {
        console.log(error.message)
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
              value={formData.name}
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
              value={formData.ward}
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
              value={formData.location}
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
              value={formData.category}
              onChange={handleChange}
              className={`${errors.category ? 'error' : ''} ${formData.category ? 'has-value' : ''}`}
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Show selected category */}
            {formData.category && (
              <div className="selected-category">
                Selected: <strong>{formData.category}</strong>
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
              value={formData.description}
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
             Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ComplaintForm