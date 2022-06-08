function findSum(n) {
    let multipleSum = 0 
    for(let i=1;i<=n;i++){
      if(i%3===0 || i%5===0){
        multipleSum += i;
      }
    }
    return multipleSum;
  }