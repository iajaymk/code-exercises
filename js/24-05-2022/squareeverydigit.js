function squareDigits(num){
    let numasString = "",square=[]
    while(num>0){
      let a = num%10
      num = Math.floor(num / 10)
      square.push(a**2)
    }
    return Number(square.reverse().join(''))
  }