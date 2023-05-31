import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

const Contact = () => {
  const location = useLocation()
  const navigate = useNavigate();
  return (
    <>
      <h1 className='text-center'>Contact</h1>
      <div className="d-flex justify-content-evenly mt-5" >
        <button onClick={()=>navigate('/contact/' , {
          state:{
            title:location.state?.title
          }
        })}>AlbumId</button>
        <button onClick={()=>navigate('/contact/two' , {
          state:{
            title:location.state?.title
          }
        })}>ID</button>
        <button onClick={()=>navigate('/contact/three' , {
          state:{
            title:location.state?.title
          }
        })}>Title</button>
      </div>
      <Routes>
        <Route path='/' element={<h1 className='text-center mt-5'>{location.state?.title?.albumId}</h1>}/>
        <Route path='/two' element={<h1 className='text-center mt-5'>{location.state?.title?.id}</h1>}/>
        <Route path='/three' element={<h1 className='text-center mt-5'>{location.state?.title?.title}</h1>}/>
      </Routes>
    </>
  )
}

export default Contact