
// Sum Mixed Array

// Instructions

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.



function sumMix(x){
    let y = x.map(x=>Number(x))
    let sum = 0
    for(let i=0;i<y.length;i++){
      sum = sum + y[i]
    }
    return sum
  }