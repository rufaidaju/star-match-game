
import React, {useState} from 'react';
import '../App.css';


const PlayNumber =(props) => {
    const [PlayNum,setPlayNum] = useState(9)
    return(
        <div className="right">
          {props.utils.range(1,9).map(buttonId =><button key={buttonId} className="number">{buttonId}</button>)}
        </div>
    )
}

export default PlayNumber;
