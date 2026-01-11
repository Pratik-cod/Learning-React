import React, { useState } from 'react'

const AdvancedState = () => {
    const [num , setnum] = useState({user:"pratik", age: 9})//usestate are work asyncronous means thoda late/

 const clicked = () => {;
   const newnum = {...num};
   
   

  newnum.user = "Aarohi"
  newnum.age = 13;

  setnum(newnum)
    }
  return (
    <div>
     <h1>{num.user} {num.age} </h1>
     <button onClick={clicked}>click</button>
    </div>
  )
}

export default AdvancedState
