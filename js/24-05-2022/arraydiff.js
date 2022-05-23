function arrayDiff(a, b) {
    let np = []
    for(let i=0;i<a.length;i++){
      if(!b.includes(a[i])){
        np.push(a[i])
      }
    }
    return np
  }