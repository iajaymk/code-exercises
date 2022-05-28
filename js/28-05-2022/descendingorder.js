function descendingOrder(n){
    return parseInt(String(n).split('').sort(function(a,b){return b-a}).join(''))
  }