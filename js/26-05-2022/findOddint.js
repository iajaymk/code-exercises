function findOdd(A) {
    let count =0,unique=[],indices=[]
    for(let i=0;i<A.length;i++){
      if(!A.includes(A[i],i+1)){
        unique.push(A[i])
      }
    }
    for(let i=0;i<unique.length;i++){
      count = 0
      for(let j=0;j<A.length;j++){
        if(unique[i]===A[j]){
          count += 1
        }
      }
      indices.push(count)
    }
    for(let i=0;i<indices.length;i++){
      if(indices[i]%2===1){
        return unique[i]
      }
    }
  }