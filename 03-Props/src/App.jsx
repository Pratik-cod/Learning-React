import React from "react";
import Hello from "./component/Hello";

const App = () => {
  return (
    <div>
      <Hello user = "Pratik Rane" age = {18} p = "Lorem ipsum dolor sit amet." />
      <Hello user = "Aarohi" age = {13}  p = "Lorem ipsum dolor sit amet."/>
      <Hello user = "Aarohi Pratik" p = "This person closet my heart." />
    </div>
  )
}

export default App;

//props idhar se data send karta hai component ko phir usse hisab se or new component ready hote hai