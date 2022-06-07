// complete the function
function solution(string) {
    let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newString = "";
      for(let i=0;i<string.length;i++){
        if(upperAlpha.includes(string[i])){
          newString +=" "
        }
        newString+=string[i];
      }
    return newString;
  }
  