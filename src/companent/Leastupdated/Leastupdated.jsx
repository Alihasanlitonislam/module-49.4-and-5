import React from 'react';

const Leastupdated = (props) => {
    return (
        <div style={{border: '2px solid black', margin: '20px'}}>
            <h1>the least update weatch</h1>
            <h1>Least states : {props.least}</h1>
        </div>
    );
};

export default Leastupdated;