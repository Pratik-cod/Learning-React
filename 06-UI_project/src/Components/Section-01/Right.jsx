import React from 'react'
import Rightcontent from './Rightcontent'

const Right = (props) => {

  return (
    <div id='scroll' className='h-full w-2/4 overflow-x-auto p-6 flex flex-nowrap gap-10'>
     {props.users.map(function(elem){
      return <Rightcontent img = {elem.img} click = {elem.click} id = {elem.id} />
     })}
    </div>
  )
}

export default Right
