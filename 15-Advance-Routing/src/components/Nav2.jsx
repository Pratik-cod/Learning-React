import React from 'react'
import {useNavigate} from 'react-router-dom'

const Nav2 = () => {
    const navigate = useNavigate()

    function navigation(){
        navigate('/home')
    }

    function navigationMini(){
        navigate(-1)
    }

    function navigationPlus(){
        navigate(+1)
    }
  return (
    <div className='px-5 py-1 bg-cyan-700 gap-7'>
      <button 
      onClick={navigation}
      className='px-5 py-2 bg-green-900 rounded-md active:scale-95 '>
        Return the main page
        </button>
      <button 
      onClick={navigationMini}
      className='px-5 py-2 bg-orange-900 rounded-md active:scale-95 g '>
        Back
        </button>
      <button 
      onClick={navigationPlus}
      className='px-5 py-2 bg-green-900 rounded-md active:scale-95 g '>
        Next
        </button>
    </div>
  )
}

export default Nav2
