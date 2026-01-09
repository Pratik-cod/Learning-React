import React from "react";

const App = () => {
  

  // return(
  //  <div>
  //    <input onChange={function(elem){
  //     console.log(elem.target.value);
      
      
  //    }} type="text"  placeholder="new"/>
  //  </div>
  // )

  return(
  <div onMouseDown={()=>{
      console.log("cart");
  }}>

  </div>
   
  )
}
export default App;