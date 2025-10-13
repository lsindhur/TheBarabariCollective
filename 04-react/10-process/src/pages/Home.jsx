import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Search from '../components/Search.jsx'
import Users from '../components/Users.jsx'

const Home = ({users,searchUsers}) => {
  //console.log(users)
  return (
    <>
    <Search searchUsers={searchUsers} />
    <Users users={users}/>
    </>
  )
}

export default Home