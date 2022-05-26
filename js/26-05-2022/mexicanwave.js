function wave(str){
    let arr=[],word=""
    for(let i=0;i<str.length;i++){
      word=""
      if(str[i]!==" ")
      {for(let j=0;j<str.length;j++){
        if(i==j){
          word+=str[i].toUpperCase()
        }
        else{
          word+=str[j]
        }
      }arr.push(word)
      }
    } 
    return arr
  }