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
import quicksort from './algorithms/quicksort'

export default function Sidebar({arr,setsize,speed,setspeed}){

    

    var [algoidx,setalgoidx] = React.useState(1);
    var [disabled,setdisabled] = React.useState(false);
   
    function handleClick(e){
        
        // e.target.disabled = true;
        setdisabled(true);

        if(algoidx === 3) selectionsort(arr,speed);
        else if(algoidx === 1) bubblesort(arr,speed);
        else if(algoidx === 2) insertionsort(arr,speed);
        else if(algoidx === 4) margesort(arr,speed);
        else if(algoidx === 5) quicksort(arr,speed);
    }


    return (
        <div className="sidebar">
        <Dropdown setalgoidx = {setalgoidx} disabled = {disabled}/>
        <Sizeslider setsize = {setsize} disabled = {disabled}/>
        <Speedslider setspeed = {setspeed} disabled = {disabled}/>
        <Button disabled = {disabled} variant="contained" onClick={handleClick}>play</Button>
        {/* <Button variant="contained" onClick={handleClick}>reset</Button> */}
        </div>
    )
}