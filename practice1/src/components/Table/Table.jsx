import React from 'react'
import Style from './Table.module.css'
import{useState,useEffect} from 'react'



export default function Table(props) {
    var color_style = {background: props.color}
    
    return(
        
        <div style = {color_style}  className={Style.tab}>
            {props.tab.map((elts)=> <div className= {Style.tab_lines}><li key={elts.indexOf}>{elts}</li><button>completed</button></div> )}
        </div>
         
    )
   
}

