function accum(s) {
	// your code
  s=s.split('')
  let sen =""
  for(let i=0;i<s.length;i++){
    for(let j=0;j<=i;j++){
      if(j===0){
        s[i]=s[i].toUpperCase()
        sen = sen + s[i]
      }
      else{
        s[i]=s[i].toLowerCase()
        sen = sen+s[i]
      }
    }
    if(i!==s.length-1){
    sen +="-"
      }
  }
  return sen
}