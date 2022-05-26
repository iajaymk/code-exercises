function twoSort(s) {
    let a = s.sort()
    let string =""
    for(let i=0;i<a[0].length;i++){
      string = string+a[0][i]
      if(i!==a[0].length-1){
        string += "***"
      }
    }
    return string
  }