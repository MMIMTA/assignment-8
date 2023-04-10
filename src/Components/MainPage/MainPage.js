import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';

const MainPage = () => {
   const[exercises, setExercises]=useState([]);

   useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setExercises(data))

   },[]);

    return (
        <div>
          <div>
            {
             exercises.map(exercise=><Exercise
             key={exercise.id}
             exercise={exercise}></Exercise>)
            }
          </div>
        </div>
    );
};

export default MainPage;