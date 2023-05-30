import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate();
  return (
    <>
      <h1>Contact</h1>
      <div className="d-flex justify-content-evenly mt-5" >
        <button onClick={()=>navigate('/contact/')}>one</button>
        <button onClick={()=>navigate('/contact/two')}>two</button>
        <button onClick={()=>navigate('/contact/three')}>three</button>
      </div>
      <Routes>
        <Route path='/' element={<h1 className='text-center mt-5'>One</h1>}/>
        <Route path='/two' element={<h1 className='text-center mt-5'>two</h1>}/>
        <Route path='/three' element={<h1 className='text-center mt-5'>three</h1>}/>
      </Routes>
    </>
  )
}

export default Contact