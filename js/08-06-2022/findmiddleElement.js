function gimme (triplet) {
    let a=triplet[0], b= triplet[1],c=triplet[2]
    let sort = [a,b,c].sort(function(r,s){ return r-s; })
    for(let i=0;i<triplet.length;i++){
      if(triplet[i]===sort[1]){
        return i;
      }
    }
  }