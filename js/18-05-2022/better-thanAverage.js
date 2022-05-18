// How good are you really?

// Instructions

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    
    let sum = 0
    for(let i=0;i<classPoints.length;i++){
      sum = sum + classPoints[i]
    }
    sum =sum + yourPoints
    let avg = sum / (classPoints.length+1)
    if(yourPoints > avg){
      return true
    }
    else{
      return false
    }
  }
  