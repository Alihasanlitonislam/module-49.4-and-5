import React from 'react';
import Leastupdated from '../Leastupdated/Leastupdated';
const Updated = (props) => {
    return (
        <div style={{border: '2px solid green', margin:'20px'}}>
            <h1>update the weatch in time</h1>
            <h1>update states : {props.states}</h1>
            <Leastupdated least = {props.states}></Leastupdated>
        </div>
    );
};

export default Updated;