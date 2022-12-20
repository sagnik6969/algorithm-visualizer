import Bar from "./Bar";
import React from "react";
// import bubblesort from "./bubblesort";
// import bubblesort2 from "./bubblesort2";
// import selectionsort from "./selectionsort";
import './barcontainer.css'
function Barcontainer({arr,speed}){
  

    return <><div className="barcontainer" style={{width : `${arr.length * 10}px`}}>
        {arr.map((val,idx) => {
        return <Bar key={idx} length = {val} id = {idx} speed = {speed}/>
    })}
    </div></>


    
    



}

export default Barcontainer