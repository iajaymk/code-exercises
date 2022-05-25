function twoSum(numbers, target) {
    let indices = []
    for(let i=0;i<numbers.length;i++){
      for (let j=i;j<numbers.length;j++){
        if(j!==i){
          if(numbers[i]+numbers[j]===target){
            indices.push(i,j)
          }
        }
      }
    }
    return indices
  }