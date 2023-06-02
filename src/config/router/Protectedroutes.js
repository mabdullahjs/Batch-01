import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebaseConfig';

const Protectedroutes = (props) => {
    const { component } = props
    const auth = getAuth(app);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        // users === false ? navigate('/') : setData(component)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoader(false)
            } else {
                setLoader(true)
                navigate('/')
            }
        })
    }, []);

    return (
        loader === false ? component : <Typography>Loading...</Typography>
    )
}

export default Protectedroutes;