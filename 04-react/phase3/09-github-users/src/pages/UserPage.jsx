import React from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'


const UserPage = ({getUser,user}) => {
const {username} = useParams();
console.log('userpage data:',user)
useEffect(() => {
    getUser(username)
},[])
 //console.log(username)
  return (
    <div>
      <img src={user.avatar_url}></img>
      <h1>{user.name}</h1>
      <p>{user.hireable? "✅Open to Work":"Not Available"}</p>
      {
        user.company && 
        <p><strong>Company:</strong>{user.company}</p>
      }
    </div>
  )
}

export default UserPage