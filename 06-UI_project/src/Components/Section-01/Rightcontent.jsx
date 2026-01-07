import React from 'react'
import RightCardInnear from './RightCardInnear'

const Rightcontent = (props) => {
  return (
  <div className='h-full w-80 rounded-4xl overflow-hidden relative shrink-0'>
   <img className= "w-full h-full object-cover"src= {props.img}alt="" />
   <RightCardInnear click = {props.click} id = {props.id} />
</div>

  )
}

export default Rightcontent