import React from 'react'

const FunctionNor = () => {

      async function fetching(){  // using the fetching the data with normal function its use the async await form 
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

console.log(response);

   }
  return (
    <div>
        <button onClick={fetching}>Click</button>
    </div>
  )
}

export default FunctionNor
