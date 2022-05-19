function duplicateEncode(word){
    let letters = word.toLowerCase().split('')
    let text=""
    for(let i=0;i<letters.length;i++){
      let count = 0
      for(let j=0;j<letters.length;j++){
        if(letters[i] === letters[j] ){
          count += 1
        }
      }
      if(count>1){
        text = text+")"
      }
      else{
        text=text+"("
      }
    }
  return text
}
