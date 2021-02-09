
import React, { useState } from 'react';
import './App.css';
import Star from './components/Star';
import PlayNumber from './components/PlayNumber';

const StarMatch = () => {
  const [stars, setStars] = useState(9);
  const [availableNum, setAvailableNum] = useState(utils.range(1, 9));
  const [candidateNum, setCandidateNum] = useState([]);

  const buttonStatus = (buttonId) => {
    if (!availableNum.includes(buttonId)) {
      return 'used'
    }
    if (candidateNum.includes(buttonId)) {
      if (utils.sum(candidateNum) > stars) {
        return 'wrong'
      }
      return 'candidate'
    }
    return 'available'
  }

  const handleNumberClick = (id, status) => {
    console.log('handleClick', id);
    console.log('CandidateNum', candidateNum);
    console.log('availableNium', availableNum);
    /* If it is not available */
    if (status !== 'yellow') {
      console.log('not available', status)
      if (status === 'blue') {
        console.log('candidate', status)
        return;
      }
      if (status === 'red') {
        console.log('wrong', status);
        setCandidateNum(candidateNum.filter((elem) => elem !== id))
        return;
      }
      return;
    }
    /* If it is available */
      const newCandidatNum = candidateNum.concat(id);
      console.log('newcandidate', newCandidatNum);
      if (utils.sum(newCandidatNum) > stars) {
        setCandidateNum(newCandidatNum)
      } else if (utils.sum(newCandidatNum) < stars) {
        setCandidateNum(newCandidatNum)
      } else {
        setAvailableNum(availableNum.filter((elem) => !newCandidatNum.includes(elem)));
        setCandidateNum([]);
      }
    
  }

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {utils.range(1, stars).map(starId => <Star key={starId} />)}
        </div>
        <div className="right">
          {utils.range(1, 9).map(buttonNumber =>
            <PlayNumber key={buttonNumber}
              buttonId={buttonNumber}
              status={statusColors[buttonStatus(buttonNumber)]}
              onClick={handleNumberClick}
            />)}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );

};
// Status colors
const statusColors = {
  'used': 'green',
  'wrong': 'red',
  'candidate': 'blue',
  'available': 'yellow'
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
