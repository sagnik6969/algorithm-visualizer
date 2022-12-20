import React from 'react';
import Sidebar from './Sidebar'
import Home from './Home'
import './body.css'



export default function Body(){

    var [size,setsize] = React.useState(25);
    var [arr,setarr] = React.useState([]);
    var [speed,setspeed] = React.useState(0.5);

    React.useEffect(()=>{

        var temparr = [];
        for(let i = 0 ; i < size; i++) temparr.push(Math.floor(Math.random() * 300));
        setarr(temparr)

    },[size])


    return (
        <div className="body">
        <Sidebar arr={arr} setsize={setsize} speed = {speed} setspeed = {setspeed}/>

        <Home arr={arr} speed={speed}/>
        {/* sidebar */}
        {/* home */}

        </div>
    )
}