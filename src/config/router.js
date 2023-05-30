import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import About from '../screens/About'
import Contact from '../screens/Contact'
import Navbars from '../components/Navbar'

const Router = () => {
  return (
    <BrowserRouter>
    <Navbars/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact/*' element={<Contact/>} />
        <Route path='*' element={<h1>No page found!</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router