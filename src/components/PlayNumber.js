
import React, {useState} from 'react';
import '../App.css';


const PlayNumber =(props) => {
    return(
        <button className="number" style={{backgroundColor : props.status}} onClick={()=>console.log('THe Number clicked,',props.buttonId)}>
        {props.buttonId}
        </button>
    )
}

export default PlayNumber;
