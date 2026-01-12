import React, { useState } from 'react'

const App = () => {
  const [like, setlike] = useState("")
  const handle = (e) => {
 e.preventDefault()
    console.log("from submited by",like);
    
  }
  return (
    <div>
      <form onSubmit={handle}>
        <label>Name</label>
        <input type="text"
         placeholder='Enter name'
         value={like}
          onChange={(e) =>{//its a two way binding concept
          setlike(e.target.value);
        }} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
