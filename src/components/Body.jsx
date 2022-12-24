import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import "./body.css";

export default function Body() {
  var [size, setsize] = React.useState(25);
  var [arr, setarr] = React.useState([]);
  var [speed, setspeed] = React.useState(0.5);
  var [generateRandom, setgenerateRandom] = React.useState(true);
  

  React.useEffect(() => {
    var temparr = [];
    for (let i = 0; i < size; i++)
      temparr.push(Math.floor(Math.random() * 300));
    setarr(temparr);
    // setalradysorted(false);
    // for(let i = 0 ; i < size ; i++){
    //     document.getElementById(i).style.transform = `translateX(${i*10}px)`; 
    // }

  }, [size, generateRandom]);

  return (
    <div className="body">
      <Sidebar
        arr={arr}
        generateRandom={generateRandom}
        setgenerateRandom={setgenerateRandom}
        setsize={setsize}
        speed={speed}
        setspeed={setspeed}
      />

      <Home arr={arr} speed={speed} />
    </div>
  );
}
