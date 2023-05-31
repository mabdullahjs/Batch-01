import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../components/Cards';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    //states
    const [data, setData] = useState(null);

    //useEffect
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                console.log(res.data.splice(0, 20));
                setData(res.data.splice(0, 20))
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    //useNavigate
    const navigate = useNavigate();


    //send data function
    const sendData = (item) => {
        console.log('function called', item)
        navigate('/contact', {
            state: {
                title: item
            }
        })
    }

    return (
        <>
            {/* <div className='d-flex justify-content-center mt-5'>
                <button onClick={() => setVal(prevVal => prevVal + 1)}>+</button>
                <div>{val}</div>
                <button onClick={() => setVal(prevVal => prevVal - 1)}>-</button>
            </div> */}
            <div className='container d-flex justify-content-evenly flex-wrap mt-5 '>
                {data ? data.map((item) => {
                    return <Cards key={item.title} title={item.title} thumbnailUrl={item.thumbnailUrl} showDataFunc={sendData} item={item} />
                }) : <h1>Loading...</h1>}
            </div>

        </>
    )
}

export default Home