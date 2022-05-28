function towerBuilder(n) {
    let pat='',arr=[]
    for(let i=1;i<=n;i++){
      pat=""
      for(let j=1;j<=n-i;j++){
        pat+=' '
      }
      for(let k=1;k<=2*i-1;k++){
        pat+="*"
      }
      for(let l=1;l<=n-i;l++){
        pat+=' '
      }
      
      arr.push(pat)
    }
    return arr
  }