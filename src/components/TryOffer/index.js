import React from 'react';

const TryOffer = ({ tryOffer, name }) => {
    return (
        <div className='tryOffer'>
            <p>{tryOffer}</p>
            <h4>{name}</h4>
        </div>
    );
}

export default TryOffer;
