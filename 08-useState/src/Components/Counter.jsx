import React, { useState } from 'react'

const Counter = () => {
    const [num , setnum] = useState(0);//usestate kise bhi state chnage karta hai 

 const numberIncrease = () => {//and num display karne ke liye and setunm value ko change akrne liye
       setnum(num+1)
    }
 const numberDecrease = () => {
       setnum(num-1)
    }
  return (
       <div className='pad'>
        <h1 className='head'>MY Counter:{num} </h1>
 <div>
  <button onClick={numberIncrease}>Increase</button>
  <button onClick={numberDecrease}>Decrease</button>
 </div>
      </div>
  )
}

export default Counter
