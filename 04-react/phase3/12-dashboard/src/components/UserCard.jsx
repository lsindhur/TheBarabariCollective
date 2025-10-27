import React from 'react'
import { Mail,Building } from 'lucide-react';
import '../styles/UserCard.css'


const UserCard = ({user}) => {
  return (
    <div className='user-card'>
        <h3 className='user-name'>{user.name}</h3>

        <div className='user-info'>
            <Mail className='user-info-icon'/>
            <span className='user-info-text'>
                <span className='user-info-label'>Email: </span>
                {user.email}
            </span>
        </div>

        <div className='user-info'>
            <Building className='user-info-icon'/>
            <span className='user-info-text'>
                <span className='user-info-label'>Company: </span>
                {user.company.name}
            </span>
        </div>
    </div>
  )
}

export default UserCard