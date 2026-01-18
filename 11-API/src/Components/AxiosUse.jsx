import React from 'react'
import axios from 'axios'

const axiosUse = () => {

  const getdata = async () => {
    const responce = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
    console.log(responce);
  }
  return (
    <div>
      <button onClick={getdata}>Click Me</button>
    </div>
  )
}

export default axiosUse
