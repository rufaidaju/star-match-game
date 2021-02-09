
import React, {useState} from 'react';
import '../App.css';


const PlayNumber =(props) => {
    return(
        <button className="number" 
        style={{backgroundColor : props.status}} 
        onClick={()=>props.onClick(props.buttonId,props.status)}
        >
        {props.buttonId}
        </button>
    )
}

export default PlayNumber;
