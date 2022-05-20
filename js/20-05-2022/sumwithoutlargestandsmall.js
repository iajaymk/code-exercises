function sumArray(array) {
    if(array=== 0 || array == null){
      return 0
    }
    else{
      let sorted = array.sort(function(a,b){return a - b}),sum=0
  for(let i=1;i<sorted.length-1;i++){
    sum = sum + sorted[i]
  }
    return sum
    }
  }