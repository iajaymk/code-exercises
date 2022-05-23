function expandedForm(num) {
    let digits = [], indices= [],expand ="",index =0
    while(num>0){
      let a = num % 10
      num = Math.floor(num / 10)
      index += 1
      if(a !== 0){
        digits.push(a)
        indices.push(index)
      }
    }
    digits=digits.reverse()
    indices =indices.reverse()
    for(let i=0;i<digits.length;i++){
      expand =expand + digits[i]*(10**(indices[i]-1))
      if(i!==digits.length-1){
        expand += " + "
      }
    }
    return expand
  }