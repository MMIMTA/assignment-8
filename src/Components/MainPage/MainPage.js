import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Cart from '../Cart/Cart';
import './MainPage.css';
import exercise from '../../images/exercise.png'
import { getCartTime } from '../../utilities/fakedb';

const MainPage = () => {
   const[exercises, setExercises]=useState([]);
  const[addItem, setAddItem]=useState([]);
  const[breakTime, setBreakTime]=useState([])

   useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setExercises(data))

   },[]);

   useEffect(()=>{
    const getTime=getCartTime();
    setBreakTime(getTime);

   },[])

  
   const HandleAddToList=(exercise)=>{
    let newCart=[];
    const addExercise=exercise;
    newCart=[...addItem, addExercise]
    setAddItem(newCart);
       
   }
   const HandleTen=(num)=>{
    const timeBreak=num;
    localStorage.setItem('Break-Time', timeBreak);
    setBreakTime(timeBreak)

   }
  
   
   
    return (
      <div>
        
        <div className='Exercise-site'>  
          <div className='exercise-part'>
           
          <p className='Heading'><img className='logo' src={exercise} alt="" />Strength and Fitness Palace</p>
          <p className='sec-heading'>Select todays exercise</p>
          <div className='container'>
            {
             exercises.map(exercise=><Exercise
             key={exercise.id}
             exercise={exercise}
             HandleAddToList={HandleAddToList}></Exercise>)
            }
          </div>
          </div>
          <div className='Cart'>
            <Cart addItem={addItem}
            HandleTen={HandleTen}
            breakTime={breakTime}></Cart>
          </div>
        </div>
        </div>
    );
};

export default MainPage;