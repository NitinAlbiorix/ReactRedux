import React from 'react';
import { useState,useEffect } from 'react';
import useCounter from './hooks/use-counter';
import Card from '@mui/material/Card';

const Forwardcounter = () => {
    const counter = useCounter();
    const  [countr,setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1 );
        },1000);    
        return () => clearInterval(interval);
    }, []);
    return (
        <Card>
            {countr}
        </Card>
    )
}

export default Forwardcounter
