import React from 'react';
import './Cart.css';
import profile from '../../images/profile.jpg'

const Cart = (props) => {

    const{addItem,breakTime}=props;
    
    let Total=0;
    for(const exercise of addItem){
      Total=Total+parseInt(exercise.time);  
    
    }
   
    return (
        <div>
        <div className='cart-container'>
            <div>
                <img  className='p-image'  src={profile} alt="" />
            </div>
            <div>
                <p className='p-name'>Marjia Akter</p>
                <p className='p-address'>Dhaka,Bangladesh.</p>
            </div>
        </div>
        
        <div className='details-container'>
            <p><span className='bio-details'>50</span> kg <br></br>weight</p>
            <p><span className='bio-details'>5'3"</span><br></br>Height</p>
            <p><span className='bio-details'>25</span> yrs<br></br>Age</p>
            
        </div>
        <div>
            <p className='cart-heading'>Add a Break</p>
            <div className='break-div'>
                <button className='break-btn' onClick={()=>props.HandleTen(10)}>10s</button>
                <button className='break-btn' onClick={()=>props.HandleTen(20)}>20s</button>
                <button className='break-btn'onClick={()=>props.HandleTen(30)}>30s</button>
                <button className='break-btn'onClick={()=>props.HandleTen(40)}>40s</button>
                <button className='break-btn'onClick={()=>props.HandleTen(50)}>50s</button>
            </div> 
        </div>
        <div>
        <p className='cart-heading'>Exercise Details</p>
        <p className='Time-div'>Exercise Time: {Total}s</p>
        <p className='Time-div'>Break Time :{breakTime}</p>
        </div>
        <button className='activity-btn'>Activity Completed </button>
        </div>
    );
};

export default Cart;