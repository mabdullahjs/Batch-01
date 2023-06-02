import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../config/firebase/firebaseConfig';
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Register = () => {
    const db = getFirestore(app);
    //navigate hook
    const navigate = useNavigate();

    //state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    //create User with email and password
    const auth = getAuth(app);
    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in 
                console.log(userCredential)
                await addDoc(collection(db, "Users"), {
                    email , password
                })
                .then(()=>{
                    navigate('/')
                    console.log('user added to database successfully');
                })
                .catch((err)=>{
                    console.log(err);
                })
                // ...
            })
            .catch((error) => {
                console.log(error)
                // ..
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
                Register User
            </Typography><br />
            <TextField onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="email" variant="outlined" /><br />
            <TextField onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="password" variant="outlined" /><br />

            <Box className="mt-5 mb-5">
                <Button onClick={() => createUser()} variant="contained">Register</Button>
            </Box>
            <Typography
                sx={{ cursor: "pointer" }}
                className="text-primary mt-2"
                onClick={() => navigate('/')}
            >
                Not a user please login!
            </Typography>
        </Box>
    )
}

export default Register