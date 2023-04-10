import React from 'react';

const Exercise = (props) => {
    const{id,name,picture,time}=props.exercise;

    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default Exercise;