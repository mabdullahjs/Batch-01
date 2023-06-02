import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/Home'
import About from '../../screens/About'
import Contact from '../../screens/Contact'
import Navbars from '../../components/Navbar'
import Login from '../../screens/Login'
import Register from '../../screens/Register'
import Protectedroutes from './Protectedroutes'

const Router = () => {
  return (
    <BrowserRouter>
    <Navbars/>
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Protectedroutes component={<Home/>}/>} />
        <Route path='/about' element={<Protectedroutes component={<About/>}/>} />
        <Route path='/contact/*' element={<Protectedroutes component={<Contact/>}/>} />
        <Route path='*' element={<h1>No page found!</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router