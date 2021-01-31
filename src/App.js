
import React, { useState } from 'react';
import './App.css';
import Star from './components/Star';
import PlayNumber from './components/PlayNumber';

const StarMatch = () => {
/*   const [playNum,setplayNum] = useState(9);
 */  const [stars,setStars] = useState(9);
     const [availableNum,setAvailableNum]= useState([8,1,6,2,3,5,7]);
     const [candidateNum,setCandidateNum]= useState([3,5,7]);

     const buttonStatus= (buttonId) => {
      if (!availableNum.includes(buttonId)){
        return 'used'
      }
      if (candidateNum.includes(buttonId)){
      return 'candidate'
      }
      return 'available'
     }

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {utils.range(1,stars).map(starId=> <Star key={starId}/>)}
        </div>
        <div className="right">
          {utils.range(1,9).map(buttonId=> <PlayNumber key={buttonId} buttonId={buttonId} status={statusColors[buttonStatus(buttonId)]} />)}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
  
};
// Status colors
const statusColors ={
  'used' : 'green',
  'wrong': 'red',
  'candidate': 'blue',
  'available': 'grey'
}
// Math science
const utils = {
  // Sum an array
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};


export default StarMatch;
