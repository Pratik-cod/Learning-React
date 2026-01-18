import React from 'react'

const ArrowFetch = () => {

const tryFetch = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
 
    const data = await response.json()//kabhi bhi data hame json mia nahi mila tha toh ham eusko json mai convert karna padta hai
    
    console.log(data);
    
}   
  return (
    <div>
        <button onClick={tryFetch}>Click</button>
    </div>
  )
}

export default ArrowFetch
