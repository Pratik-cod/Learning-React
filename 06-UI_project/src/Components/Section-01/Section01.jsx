import React from 'react'
import Navbar from './Navbar' 
import PageContent from './PageContent'

const Section01 = (props) => {
  return (
    <div>
      <Navbar />
     <PageContent users= {props.users}/>
    </div>
  
  )
}

export default Section01
