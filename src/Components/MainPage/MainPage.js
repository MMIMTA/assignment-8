import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Cart from '../Cart/Cart';
import './MainPage.css';
import exercise from '../../images/exercise.png'

const MainPage = () => {
   const[exercises, setExercises]=useState([]);

   useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setExercises(data))

   },[]);

    return (
      <div>
        
        <div className='Exercise-site'>  
          <div>
           
          <p className='Heading'><img className='logo' src={exercise} alt="" />Strength and Fitness Palace</p>
          <p className='sec-heading'>Select todays exercise</p>
          <div className='container'>
            {
             exercises.map(exercise=><Exercise
             key={exercise.id}
             exercise={exercise}></Exercise>)
            }
          </div>
          </div>
          <div>
            <Cart></Cart>
          </div>
        </div>
        </div>
    );
};

export default MainPage;