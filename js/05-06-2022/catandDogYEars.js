var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let catYears=0,dogYears=0;
    if(humanYears===1){
      catYears += 15;
      dogYears += 15;
    }
    else if(humanYears === 2){
      catYears += 24;
      dogYears += 24;
    }
    else{
      catYears = 24;
      dogYears = 24;
      for(i=0;i<humanYears-2;i++){
        catYears += 4;
        dogYears += 5;
      }
    }
    return [humanYears,catYears,dogYears];
  }
  