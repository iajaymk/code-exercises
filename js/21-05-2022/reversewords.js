// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    str=str.split(' ')
    let reversedarr=[]
    for(let i=0;i<str.length;i++){
  //     for(let j=0;j<str[i].length;i++){
        reversedarr[i] = str[i].split('').reverse().join('')
  //     }
    }
    let reversedString = reversedarr.join(' ')
    return reversedString
  }