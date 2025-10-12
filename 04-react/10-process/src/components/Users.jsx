import React from 'react'

const Users = ({users}) => {
  console.log(users)
  return (
    <div className='container'>
      <div className='row'>
      {
        users.map((user,index) => (
          <div key={index} className='col-md-4'>
            <img src={user.avatar_url} className='card-img-top'></img>
            <h1>{user.login}</h1>
            <a href={user.html_url} className='btn btn-dark'>Git Profile</a>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Users