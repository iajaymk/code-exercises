// Convert number to reversed array of digits

// Instructions

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


function digitize(n) {
    const arrOfStr = n.toString().split('').reverse()
    const arrNum = []
    arrOfStr.forEach(str => {
    arrNum.push(Number(str));
  });
    return arrNum
  }