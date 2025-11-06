import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import './App.css'

//import components
import Navbar from './components/Navbar'
import ComplaintForm from './components/ComplaintForm'

//import pages
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'

const App = () => {
  return (
    <>
    <AuthProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route   path="/submit-complaint" element={<ComplaintForm/>}/>
        <Route />
    </Routes>
     </AuthProvider>
    </>
  )
}

export default App