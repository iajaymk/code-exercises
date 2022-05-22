class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smal = args[0]
      for(let i=0;i<args.length;i++){
        if(args[i]<smal){
          smal = args[i]
        }
      }
      return smal
    }
  }