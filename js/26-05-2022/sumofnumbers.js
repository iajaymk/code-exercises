function getSum( a,b )
{ let sum =0
  if(a!==b){
    let arr =[a,b]
    arr.sort(function(a,b){
      return a-b
    })
    for(let i = arr[0];i<=arr[1];i++){
      sum =sum+i
    }
    return sum
  }
 else{
   return a
 }
}