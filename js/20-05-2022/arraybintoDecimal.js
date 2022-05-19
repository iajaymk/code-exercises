function binaryArrayToNumber(arr){
    let newarr = arr.reverse()
    let size = arr.length
    let sum = 0
    for(let i=0;i<size;i++){
        sum = sum + newarr[i]*(2**i)
    }
    return sum
  };