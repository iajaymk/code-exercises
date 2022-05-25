function strCount(str, letter){  
    let count =0
    if(str.includes(letter))
    { 
      for(let i=0;i<str.length;i++){
        if(str[i]===letter){
          count += 1
        }
      }
        return count
    }
    else{
      return 0
    }
  }