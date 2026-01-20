import React, { useEffect, useState } from 'react'

const App = () => {

  const[num,setnum] = useState(10)
  const[num2,setnum2] = useState(20)
  useEffect(function(){
    console.log("continue");
    
  },[num])
  return (
    <div>
      <h1>The value of num is : {num}</h1>
      <h1>The value of num is : {num2}</h1>
      <button  onMouseEnter={() => {
        setnum(num+1)
      }  }
      onMouseLeave={() =>{
        setnum2(num+10)
      }}
      >Clic kme</button>
    </div>
  )
}

export default App
