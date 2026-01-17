import React, { useState } from 'react'

const App = () => {

const [title,setTitle] = useState("")
const [details,setDetails] = useState("")
const [Task,SetTask] = useState([])
  const submithandler = (e) => {
    e.preventDefault()
    
    const copyTask = [...Task]

copyTask.push({title,details})
SetTask(copyTask)
console.log(Task);


    setTitle('')
    setDetails('')

  }

  const deletebtn = (idex) => {
 const copyTask = [...Task]

 copyTask.splice(idex,1)
 SetTask(copyTask)
  }

  return (
    <div className='h-screen bg-black lg:flex text-white'>
      
      {/* Add Notes Section */}
      <div className='p-10 lg:w-1/2'>
        <h1 className='text-4xl font-bold mb-5'>Add Notes</h1>
        <form onSubmit={submithandler} className='flex flex-col gap-4 w-1/2'>
          <input
            type="text"
            placeholder='Enter the heading'
            value={title}
            onChange={(e) => {
             setTitle(e.target.value);
             
            }}
            className='px-5 w-full py-2 border-2 outline-none font-medium rounded'
          />
          <textarea
            className='px-5 w-full py-2 border-2 outline-none font-medium rounded h-32'
            placeholder='Write details'
            value={details}
            onChange={(e) => {
              setDetails(e.target.value)
            }}
          />
          <button className='bg-white font-medium w-full active:scale-95 outline-none text-black rounded'>
            Add Notes
          </button>
        </form>
      </div>

      {/* Your Notes Section */}
      <div className='p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='text-3xl font-bold mb-5'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 overflow-auto items-start justify-start'>
         {Task.map(function(elem,idex){
return  <div className=' flex relative justify-between items-start flex-col w-40 h-52 rounded bg-cover text-black pb-4 py-9 px-4 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]' key={idex}>
  <div>
    <h3 className='leading-tight text-2xl font-bold'>{elem.title}</h3>
  <p className='mt-2 text-gray-500 leading-tight'>{elem.details}</p>
  </div>
  <button className='w-full cursor-pointer py-1 text-xs bg-red-500 rounded font-bold active:scale-95' onClick={() =>{
    deletebtn(idex)
  }}>Delete</button>
</div>
         })}
        </div>
      </div>
    </div>
  )
}

export default App