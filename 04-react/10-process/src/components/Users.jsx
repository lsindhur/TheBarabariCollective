import React from 'react'
import {Link} from 'react-router-dom'

const Users = ({users}) => {
 // console.log(users)
 
  return (
    <div className='container'>
      <div className='row'>
      {
        users.map((user,index) => (
          <div key={index} className='col-md-4'>
            <img src={user.avatar_url} className='card-img-top'></img>
            <h1>{user.login}</h1>
            <Link to={`/users/${user.login}`} className='btn btn-dark'>Git Profile</Link>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Users