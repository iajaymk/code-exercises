function disemvowel(str) {
    let sent =[],vowels=['a','e','i','o','u']
    for(let i=0;i<str.length;i++){
      if(!vowels.includes(str[i].toLowerCase())){
        sent.push(str[i]);
      }
    }
    return sent.join('')
  }