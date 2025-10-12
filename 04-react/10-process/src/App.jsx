import React, { useEffect, useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import axios from 'axios'

//import pages
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'


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
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home users={users}/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </>
  )
}

export default App