import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Search from '../components/Search.jsx'
import Users from '../components/Users.jsx'

const Home = ({users}) => {
  //console.log(users)
  return (
    <>
    <Search />
    <Users users={users}/>
    </>
  )
}

export default Home