import React from "react";

const Hello = (props) => {
    console.log(props.user,props.age);
    
    return(   
        <div className="parent">
        <div className="card">
 <h1>{props.user}</h1>
 <h2 className="age">{props.age}</h2>
 <p>{props.p}</p>
 <button>View profile</button>
        </div>
        </div>
    )
}

export default Hello;

//tabh aap props ka use karte ho toh aap
//folder<card /> iske andaer ek statement likha te ho like ,<card user ="name"> kyu ki ye component ko bhej rahe ho matlab mai apne value ko
//value ko change kar pa raha hu 

//and aapko age bhejne hai matlab number bhejna hai toh age = {18} aese likhana padega nahi toh string mai likhana padega

//samjao hmae bohot sare compoennt banane hai toh {props.user } isse type har jagah user karna hoga