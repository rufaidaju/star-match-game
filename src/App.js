
import React,{useState} from 'react';
import './App.css';

const StarMatch = () => {
  const [stars,setStars] = useState(5)
  const [buttonsNum,setbuttonsNum] = useState(9)

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {utils.range(1,stars).map(starId =>
             <div key={starId} className="star" />
          )}
        </div>
        <div className="right">
          {utils.range(1,9).map(buttonId =><button className="number">{buttonId}</button>)}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
  
};
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