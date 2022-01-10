import React from 'react';
import { useState,useEffect } from 'react';
import useCounter from './hooks/use-counter';
import Card from '@mui/material/Card';


const Forwardcounter = () => {
    const counter =     useCounter(false);
   
    return (
        <Card>{counter}</Card>
    )
}

export default Forwardcounter
