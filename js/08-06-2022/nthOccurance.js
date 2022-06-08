function deleteNth(arr,n){
    let repeat = [],occurance = [],newArr=[]
    for(let i=0;i<arr.length;i++){
      if(!repeat.includes(arr[i])){
        repeat.push(arr[i])
        occurance.push(1)
        newArr.push(arr[i])
      }
      else{
        for(let j=0;j<repeat.length;j++){
          if(arr[i]===repeat[j]){
            occurance[j] += 1
            if(occurance[j]<=n){
              newArr.push(arr[i])
            }
          }
        }
      }
    }
     return newArr 
   }