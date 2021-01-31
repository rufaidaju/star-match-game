import React, {useState} from 'react';
import '../App.css';

const Stars = (props)=>{
    const [stars,setStars] = useState(5)
    return(
        <div className="left">
          {props.utils.range(1,stars).map(starId =>
             <div key={starId} className="star" />
          )}
        </div>
    )
}

export default Stars;
