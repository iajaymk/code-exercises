function high(x){
    let words = x.split(' ')
        let wordsScore=[]
    let dict="abcdefghijklmnopqrstuvwxyz".split('')
    for(let i=0;i<words.length;i++){
      let score=0
      for(let j=0;j<words[i].length;j++){
        for(let k=0;k<dict.length;k++){
          if(words[i][j]===dict[k]){
            score += k+1
          }
        } 
      }
      wordsScore.push(score)
    }
    let num=wordsScore[0],index=0
    for(let l=0;l<wordsScore.length;l++){
      if(num<wordsScore[l]){
        num = wordsScore[l]
        index=l
      }
    }
    return words[index]
  }