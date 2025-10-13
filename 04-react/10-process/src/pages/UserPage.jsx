import React from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'


const UserPage = ({getUser}) => {
const {username} = useParams();

useEffect(() => {
    getUser(username)
},[])
 //console.log(username)
  return (
    <div>UserPage</div>
  )
}

export default UserPage