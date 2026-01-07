import React from 'react'

const RightCardInnear = (props) => {
  return (
      <div className='absolute top-0 left-0 w-full h-full p-4 flex justify-between flex-col'>
  <h2 className='h-10 w-10 bg-white rounded-full flex justify-center items-center font-semibold text-2xl'>{props.id}</h2>
  <div>
    <p className='text-gray-300 mb-10 leading-relaxed text-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto tempora minus perferendis?</p>
    <div className='flex justify-between'>
        <button className='bg-blue-600 text-white rounded-full px-8 py-2 font-medium'>{props.click}</button>
        <button className='bg-blue-600 text-white px-3 py-2 rounded-full font-medium'><i className="ri-arrow-right-fill"></i></button>
    </div>
  </div>
</div>
  )
}

export default RightCardInnear
