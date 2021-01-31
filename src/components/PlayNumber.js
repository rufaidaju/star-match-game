
import React, {useState} from 'react';
import '../App.css';


const PlayNumber =(props) => {
    return(
          <button className="number">{props.buttonId}</button>
    )
}

export default PlayNumber;
