import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {

  //useLocation for get data
  const location = useLocation()
  const title = location.state.title.title;


  return (
    <>
      <h1 className='text-center'>About Page</h1>
      <p className='text-center'>Title:{title}</p>
    </>

  )
}

export default About