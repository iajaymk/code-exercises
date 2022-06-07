function doubleChar(str) {
    // Your code here
    let newString="";
    for(let i=0;i<str.length;i++){
      newString += str[i]+str[i]
    }
    return newString;
  }
  