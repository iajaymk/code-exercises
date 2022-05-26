function XO(string) {
    let countX=0,countY=0,str=string.split('')
    for(let i=0;i<str.length;i++){
      if(str[i]==='x'||str[i]==='X'){
        countX+=1
      }
      else if(str[i]==='o'||str[i]==='O'){
        countY+=1
      }
    }
    return countX===countY
  }