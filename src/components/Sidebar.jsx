import { Button } from '@mui/material'
import './sidebar.css'
import Dropdown from './sidebaritems/Dropdown'
import React from 'react'
import selectionsort from './algorithms/selectionsort'
import Sizeslider from './sidebaritems/Sizeslider';
import Speedslider from './sidebaritems/Speedslider';
import bubblesort from './algorithms/bubblesort'
import insertionsort from './algorithms/insertionsort'
import margesort from './algorithms/margesort'


export default function Sidebar({arr,setsize,speed,setspeed}){

    var [algoidx,setalgoidx] = React.useState(1);
    
   
    function handleClick(){
        if(algoidx === 3) selectionsort(arr,speed);
        else if(algoidx === 1) bubblesort(arr,speed);
        else if(algoidx === 2) insertionsort(arr,speed);
        else if(algoidx === 4) margesort(arr,speed);
    }


    return (
        <div className="sidebar">
        <Dropdown setalgoidx = {setalgoidx}/>
        <Sizeslider setsize = {setsize}/>
        <Speedslider setspeed = {setspeed}/>
        <Button variant="contained" onClick={handleClick}>play</Button>
        </div>
    )
}