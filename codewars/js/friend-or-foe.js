// Friend or Foe?


// Instructions

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]


function friend(friends){
    let numOfFriends = friends.length 
    let sure = []
    for(let i=0;i<numOfFriends;i++){
      if(friends[i].split('').length === 4){
        sure.push(friends[i])
      }
    }
    return sure
  }