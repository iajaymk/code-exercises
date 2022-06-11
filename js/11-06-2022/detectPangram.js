function isPangram(string){
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");
    string = string.toLowerCase().split('');
    let various = []
    for(let i=0;i<string.length;i++){
      if(alphabets.includes(string[i]))
        {
          if(!various.includes(string[i])){
            various.push(string[i])
          }
        }
    }
    return various.sort().length===alphabets.length?true:false;
  }