// Syuare(n)Sum

// Instructions

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers){
    let squared = numbers.map(x=> x*x)
    let sum = 0
    for(let i=0;i<squared.length;i++){
      sum = sum + squared[i]
    }
    return sum
  
  }