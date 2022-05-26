var countSheep = function (num){
    if(num>0){
      let msg=""
      for(let i=1;i<=num;i++){
        msg+=i+" sheep..."
      }
      return msg
    }
    else{
      return ""
    }
  }