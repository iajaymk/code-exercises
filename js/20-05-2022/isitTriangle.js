function isTriangle(a,b,c)
{  let count = 0
  if(a+b>c){
    count += 1
  }
 if(c+b>a){
    count += 1
  }
 if(a+c>b){
    count += 1
  }
   return count===3?true:false
}