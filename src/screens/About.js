import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import app from '../config/firebase/firebaseConfig';
import { addDoc, collection, deleteDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const About = () => {
  const db = getFirestore(app);
  const auth = getAuth(app);

  const [exercise, setexercise] = useState('')
  const [reps, setreps] = useState('')
  const [data, setData] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    if (shouldFetch) {
      getData()
      setShouldFetch(false)
    }
  }, [shouldFetch])


  // getData from firestore
  const getData = async () => {
    const dataArr = []
    const q = query(
      collection(db, 'Exercise'),
      where("userId", "==", auth.currentUser.uid)
    );
    const exerciseData = await getDocs(q);
    exerciseData.forEach((doc) => {
      dataArr.push({...doc.data(), documentId: doc.id})
    });
    console.log(dataArr)
    setData(dataArr)
  }

  //save exercise function
  const saveExercise = async () => {
    await addDoc(collection(db, "Exercise"), {
      exercise, reps, userId: auth.currentUser.uid
    })
      .then(() => {
        console.log('data added succesfully');
        setShouldFetch(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //delete data from firestore
  // const deleteData = async ()=>{
  //   deleteDoc(doc(db, 'Exercise', id));
  // }

  return (
    <>
      <Box>
        <Typography className='mt-5 text-center'>Gym App</Typography>
        <Box className='d-flex justify-content-center mt-5'>
          <TextField value={exercise} onChange={(e) => setexercise(e.target.value)} id="outlined-basic" label="exercise" variant="outlined" />
        </Box>
        <Box className='d-flex justify-content-center mt-3'>
          <TextField value={reps} onChange={(e) => setreps(e.target.value)} id="outlined-basic" label="reps" variant="outlined" />
        </Box>
        <Box className='text-center mt-3'>
          <Button variant='contained' onClick={saveExercise}>Save</Button>
        </Box>


        {data ? data.map((item , index) => {
          return <Box key={index} sx={{ border: '1px solid black', padding: '1rem', width: '30%', margin: '2rem' }}>
            <Typography>exerciseName : {item.exercise}</Typography>
            <Typography>reps: {item.reps}</Typography>
          </Box>
        }) : <h1>Loading...</h1>}
      </Box>
    </>

  )
}

export default About