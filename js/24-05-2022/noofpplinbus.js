var number = function(busStops){
    let passengerin =0,passengerout = 0
    for(let i=0;i<busStops.length;i++){
      passengerin += busStops[i][0]
      passengerout += busStops[i][1]
    }
    return passengerin - passengerout
  }