import React from 'react'
import Left from './left'
import Right from './right'

const PageContent = (props) => {
  return (
    <div className='py-10 flex items-center gap-10 px-12 h-[90vh] '>
<Left />
<Right users = {props.users}/>
    </div>
  )
}

export default PageContent
