import React from 'react';
import Barcontainer from './Barcontainer'
import './home.css'
export default function Home({arr,speed}){
    


    return (
        <div className="home">
        <Barcontainer arr={arr} speed = {speed}/>
        </div>
    )
}