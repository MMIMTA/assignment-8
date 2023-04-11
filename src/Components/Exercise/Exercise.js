import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const{id,name,picture,time}=props.exercise;

    return (
        <div className='Exercise-container'>
        <div className='image'>
            <img src={picture} alt="" />
        </div>
        <p className='exe-name'>Name :{name}</p>
        <p>Time: {time}</p>
        
        <button className='button' onClick={()=>props.HandleAddToList(props.exercise)}>Add To List</button>
        
        </div>
    );
};

export default Exercise;