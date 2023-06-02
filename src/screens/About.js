import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import app from '../config/firebase/firebaseConfig';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const About = () => {
  const db = getFirestore(app);
  const auth = getAuth(app);

  const [exercise, setexercise] = useState('')
  const [reps, setreps] = useState('')

  //save exercise function
  const saveExercise = async () => {
    await addDoc(collection(db, "Exercise"), {
      exercise , reps , userId:auth.currentUser.uid
    })
      .then(() => {
        console.log('data added succesfully');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <Box>
        <Typography className='mt-5 text-center'>Gym App</Typography>
        <Box className='d-flex justify-content-center mt-5'>
          <TextField onChange={(e) => setexercise(e.target.value)} id="outlined-basic" label="exercise" variant="outlined" />
        </Box>
        <Box className='d-flex justify-content-center mt-3'>
          <TextField onChange={(e) => setreps(e.target.value)} id="outlined-basic" label="reps" variant="outlined" />
        </Box>
        <Box className='text-center mt-3'>
          <Button variant='contained' onClick={saveExercise}>Save</Button>
        </Box>

        {/* <Box sx={{border:'1px solid black' , padding:'1rem' , width:'30%' , margin:'2rem'}}>
          <Typography>exerciseName</Typography>
          <Typography>reps</Typography>
        </Box> */}
      </Box>
    </>

  )
}

export default About