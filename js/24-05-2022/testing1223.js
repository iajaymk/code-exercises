var number=function(array){
    //your awesome code here
    let arr = []
    if(array.length>0){
      for(let i=0;i<array.length;i++){
        let string = (i+1) + ": "+ array[i]
        arr.push(string) 
      }
    }
    return arr
  }