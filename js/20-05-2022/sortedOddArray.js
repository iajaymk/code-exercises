// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


function sortArray(array) {
    let oddIndices = [], oddNum = []
    let sortedOdd = [], newArray=[]
    for(let i=0;i<array.length;i++){
      if(Math.abs(array[i]%2)===1){
        oddNum.push(array[i])
        oddIndices.push(i)
      }
    }
    sortedOdd = oddNum.sort(function(a,b){return a-b})
    let j=0
    for(let i=0;i<array.length;i++){
      
      if(oddIndices.includes(i)){
        newArray.push(sortedOdd[j])
        j += 1
      }
      else{
        newArray.push(array[i])
      }
    }
    return newArray
  }