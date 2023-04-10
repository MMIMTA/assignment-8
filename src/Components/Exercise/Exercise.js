import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const{id,name,picture,time}=props.exercise;

    return (
        <div>
          
        <div className='image'>
            <img src={picture} alt="" />
        </div>
        </div>
    );
};

export default Exercise;