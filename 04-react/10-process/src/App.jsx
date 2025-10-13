import React, { useEffect, useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import axios from 'axios'

//import pages
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import UserPage from './pages/UserPage.jsx'


const App = () => {

  const [users,setUsers] = useState([])

  useEffect(() => {
    try {
      const getData = async () => {
        const {data} = await axios.get('https://api.github.com/users')
        setUsers(data)
      }
      getData();
    } catch (error) {
      console.log(error)
    }
  },[])

  async function searchUsers (username) {
    try {
      const {data} = await axios.get(`https://api.github.com/search/users?q=${username} `)
      setUsers(data.items)
    } catch (error) {
      console.log(error)
    }
  }

 const getUser = async (username) => {
  try {
    const {data} = await axios.get(` https://api.github.com/users/${username}`)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
 }

 //getUser('priyagoud246')
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home users={users} searchUsers={searchUsers}/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='users/:username' element={<UserPage getUser={getUser}/>}/>
    </Routes>
    </>
  )
}

export default App