import React, { useEffect, useState } from 'react';
import Updated from '../Updated/Updated';

const Weatch = () => {
    const [weatch, setWeatch] = useState(0)
    const increadis = () => setWeatch(weatch + 1)
    const decreadis = () => setWeatch(weatch - 1)
    useEffect(()=>{
        console.log(weatch)
    },[weatch])
    return (
        <div style={{border: '2px solid red', padding: '20px'}}>
            <h1>this is digital weatch in bangladesh </h1>
            <h1>States : {weatch}</h1>
            <button onClick={increadis} style={{marginRight: '5px'}}>Dey Dur.....</button>
            <button onClick={decreadis}>Day Aey......</button>
            <Updated states = {weatch}></Updated>
        </div>
    );
};

export default Weatch;