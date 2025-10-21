import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'

//import pages
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

//import Components
import Navbar from './components/Navbar'
import RequireAuth from './components/RequireAuth'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <>
    <AuthProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      
      <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </AuthProvider>
    </>
  )
}

export default App