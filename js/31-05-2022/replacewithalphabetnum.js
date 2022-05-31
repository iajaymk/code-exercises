function alphabetPosition(text) {
    let alphabet="abcdefghijklmnopqrstuvwxyz".split('');
    text = text.toLowerCase();
    let converted="",num=[]
    for(let i=0;i<text.length;i++){
      if(alphabet.includes(text[i])){
        for(let j=0;j<alphabet.length;j++){
          if(text[i]===alphabet[j]){
            num.push(j+1)
          }
        }
      }
      
    }
    for(let i=0;i<num.length;i++){
      if(i!==0){
        converted+=" "
      }
      converted+=num[i]
    }
      return converted
    
  }