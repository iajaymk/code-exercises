function longest(s1, s2) {
    let arr1=[]
    for(let i=0;i<s1.length;i++){
      if(!arr1.includes(s1[i])){
        arr1.push(s1[i])
      }
    }
    for(let i=0;i<s2.length;i++){
      if(!arr1.includes(s2[i])){
        arr1.push(s2[i])
      }
    }
    return arr1.sort().join('')
  }