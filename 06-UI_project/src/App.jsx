import React from 'react'
import Section01 from './Components/Section-01/Section01'
import Section02 from './Components/section-02/Section02'

const App = () => {

  const users = [
    {
    img: "https://img.freepik.com/premium-photo/corporate-men-portrait-photography-with-office-background_526502-297.jpg?w=360",
    info: "",
    click: "Satisfied",
    id:"0"
    },
    {
    img: "https://thumbs.dreamstime.com/b/portrait-smile-business-man-handshake-b-b-deal-congrats-welcome-face-corporate-hr-officer-portrait-smile-315109194.jpg",
    info: "",
    click: "relaxed",
    id:"1"
    },
    {
     img: "https://wallpapercave.com/wp/wp4936606.png",
    info: "",
    click: "Gussing",
   id:"2"

    },
    {
     img: "https://wallpapers.com/images/hd/master-vijay-bollywood-star-z1xfayv1nqengl43.jpg",
    info: "",
    click: "Meeting",
    id: "3"
    }
  ]
  return (
    <div>
      <Section01 users= {users} />
      <Section02 />
    </div>
  )
}

export default App
