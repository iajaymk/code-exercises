// Highest and Lowest


function highAndLow(numbers){
  
    let digits = numbers.split(' ')
    let min = digits[0]
    let max = digits[0]
    for(let i=0;i<digits.length;i++){
      if(min<Number(digits[i])){
        min = digits[i]
      }
      else if(max > Number(digits[i])){
        max=digits[i]
      }
    }
    return min+ " " + max
    
  }