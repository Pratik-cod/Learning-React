import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import {Routes , Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Nav2 from './components/Nav2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Nav2 />
      <Routes>
        <Route path = "/home" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />}>
        
         <Route path='men' element ={ <Men />} />
        <Route path='women' element ={ <Women />} /> 
        <Route path='kids' element ={ <Kids />} /> 
        </Route>
       
       

 <Route path = "*" element = {<NotFound />} />
      </Routes>
      <Footer />
      
      
    </div>
  )
}

export default App
