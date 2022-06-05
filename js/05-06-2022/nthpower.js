function index(array, n){
    if(n<=array.length-1){
      return array[n]**n;
    }
    else{
      return -1;
    }
  }