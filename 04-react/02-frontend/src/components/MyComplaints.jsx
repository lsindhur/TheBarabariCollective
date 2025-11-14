import React, { useEffect, useState } from 'react'
import '../styles/MyComplaints.css'
import {Link} from 'react-router-dom'
import { ComplaintAPI } from '../services/api'

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints()
  },[])

  const fetchComplaints = async () => {
    try {
      const response =await ComplaintAPI.getComplaints();
      console.log(response)
      setComplaints(response)

    } catch (error) {
      console.log(error.message)
    } finally {

    }
  }


  return (
    <div className="my-complaints-container">
       {/* Header section */}
       <div className="my-complaints-header">
         <h1>My Complaints</h1>
        <p>Track the status of your submitted complaints</p>
       


        {/* Actions: filter + submit new complaint */}
        <div className="header-actions">
             {/* Status filter dropdown */}
             <div className="filter-controls">
                 <label htmlFor="status-filter">Filter by status:</label>
                 <select className="status-filter">
                      <option value="All">All Statuses</option>
                      <option value="Open">Open</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                 </select>
             </div>
             {/* New complaint button */}
             <Link to="/submit-complaint" className="new-complaint-btn">
             Submit New Complaint
             </Link>
        </div>
      </div>

      {/* Complaints list grid */}
      <div className="complaints-grid">
          {
            complaints.map(complaint => (
              <div key={complaint._id} className="complaint-card">
                 {/* Complaint header (ID + status badge) */}
                <div className="complaint-header">
                    <div className="complaint-id">
                        ID: {complaint.complaintId}
                    </div>
                    <span>
                        {complaint.status}
                    </span>
                </div>

                  {/* Complaint details */}
                  <div className="complaint-content">
                     <h3 className="complaint-name">{complaint.name}</h3>

                      <div className="complaint-details">
                           {/* Ward */}
                           <div className="detail-item">
                            <span className="detail-label">Ward:</span>
                            <span className="detail-value">{complaint.ward}</span>
                          </div>

                           {/* Location */}
                            <div className="detail-item">
                            <span className="detail-label">Location:</span>
                            <span className="detail-value">{complaint.location}</span>
                            </div>

                            {/* Category */}
                            <div className="detail-item">
                              <span className="detail-label">Category:</span>
                              <span>{complaint.category}</span>
                            </div>

                                 {/* Created Date */}
                             <div className="detail-item">
                              <span className="detail-label">Submitted:</span>
                              <span className="detail-value">
                                {complaint.createdAt}
                              </span>
                            </div>

                               {/* Description */}
                           <div className="complaint-description">
                            <span className="detail-label">Description:</span>
                            <p>{complaint.description}</p>
                          </div>

                      </div>
                  </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default MyComplaints