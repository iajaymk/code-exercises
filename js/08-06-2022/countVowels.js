function getCount(str) {
    str = str.toLowerCase()
    let vowelsCount = 0;
    let vowels="aeiou".split('')
    for(let i=0;i<str.length;i++){
      if(vowels.includes(str[i])){
        vowelsCount += 1
      }
    }
    return vowelsCount;
  }