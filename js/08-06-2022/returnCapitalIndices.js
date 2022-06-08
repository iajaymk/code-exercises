var capitals = function (word) {
    let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let indices =[];
    for(let i=0;i<word.length;i++){
      if(letters.includes(word[i])){
        indices.push(i);
      }
    }
    return indices;
  };