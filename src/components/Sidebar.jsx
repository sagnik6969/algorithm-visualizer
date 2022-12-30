import { Button } from "@mui/material";
import "./sidebar.css";
import Dropdown from "./sidebaritems/Dropdown";
import React from "react";
import selectionsort from "./algorithms/selectionsort";
import Sizeslider from "./sidebaritems/Sizeslider";
import Speedslider from "./sidebaritems/Speedslider";
import bubblesort from "./algorithms/bubblesort";
import insertionsort from "./algorithms/insertionsort";
import margesort from "./algorithms/margesort";
import quicksort from "./algorithms/quicksort";
import heapsort from "./algorithms/heapsort";
//import React from 'react';
import {  toast } from 'react-toastify';

export default function Sidebar({
  arr,
  generateRandom,
  setgenerateRandom,
  setsize,
  speed,
  setspeed,
}) {
  var [algoidx, setalgoidx] = React.useState(1);
  var [disabled, setdisabled] = React.useState(false);
  var [alradySorted, setalradysorted] = React.useState(false);

  React.useEffect(()=>{

    setalradysorted(false)

  },[arr])
//   const notify = () => toast("Wow so easy!");
//   notify();
  async function handleClick(e) {

    if(alradySorted){
        toast.info("Array is alrady Sorted");
        
        // console.log("alrady sorted");
        return;
    }
    // e.target.disabled = true;
    setdisabled(true);

    if (algoidx === 3) await selectionsort(arr, speed);
    else if (algoidx === 1) await bubblesort(arr, speed);
    else if (algoidx === 2) await insertionsort(arr, speed);
    else if (algoidx === 4) await margesort(arr, speed);
    else if (algoidx === 5) await quicksort(arr, speed);
    else if (algoidx === 6) await heapsort(arr,speed);

    setalradysorted(true)

    setdisabled(false);
  }

  return (
    <div className="sidebar">
      <Dropdown setalgoidx={setalgoidx} disabled={disabled} />
      <Sizeslider setsize={setsize} disabled={disabled} />
      <Speedslider setspeed={setspeed} disabled={disabled} />
      <div className="bottoncontainer">
      <Button disabled={disabled} variant="contained" onClick={handleClick}>
        play
      </Button>
      <Button
        disabled={disabled}
        variant="contained"
        onClick={() =>{setalradysorted(false) ; setgenerateRandom(!generateRandom)}}
      >
        Reset
      </Button>
      </div>
      {/* <Button variant="contained" onClick={handleClick}>reset</Button> */}
    </div>
  );
}
