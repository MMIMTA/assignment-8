const getCartTime=()=>{
 const storeTime=localStorage.getItem('Break-Time');
 return storeTime
}

export { getCartTime}