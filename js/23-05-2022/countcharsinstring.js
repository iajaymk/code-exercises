function count (string) {  
    let letters =[],repeat=[],count = 0
    for(let i=0;i<string.length;i++){
      if(!letters.includes(string[i])){
        letters.push(string[i])
        count =0
        for(let j=0;j<string.length;j++){
          if(string[i]===string[j]){
            count += 1
          }
        }
        repeat.push(count)
      }
    }
    let list ={}
    for(let i=0;i<repeat.length;i++){
      list[letters[i]]=repeat[i]
    }
    return list
  }