import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import app from '../config/firebase/firebaseConfig';


const Login = () => {

    //navigate hook
    const navigate = useNavigate();

    //state
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')


    //create User with email and password
    const auth = getAuth(app);
    const createUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            navigate('/home')
          // ...
        })
        .catch((error) => {
            console.log(error)
        });
    }


    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            minHeight="100vh"
        >
            <Typography className="mb-4" variant="h4">
                Login User
            </Typography><br />
            <TextField onChange={(e)=>setEmail(e.target.value)} id="outlined-basic" label="email" variant="outlined" /><br />
            <TextField onChange={(e)=>setPassword(e.target.value)} id="outlined-basic" label="password" variant="outlined" /><br />

            <Box className="mt-5 mb-5">
                <Button onClick={()=>createUser()} variant="contained">Login</Button>
            </Box>
            <Typography
                sx={{ cursor: "pointer" }}
                className="text-primary mt-2"
                onClick={() => navigate('/register')}
            >
                Not a user please register!
            </Typography>
        </Box>
    )
}

export default Login