function productFib(prod){
    let fib=[0,1]
    for(let i=0;fib[i]*fib[i+1]<prod;i++){
      fib.push(fib[i]+fib[i+1])
    }
    let len = fib.length-1
    if(fib[len]*fib[len-1]===prod){
      return [fib[len-1],fib[len],true]
    }
    else {
      return [fib[len-1],fib[len],false]
    }
  }