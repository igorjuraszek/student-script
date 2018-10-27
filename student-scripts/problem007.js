function findMax() {
  var maxValue=arguments[0];
    for (var i=0; i < arguments.length; i++) {
      if(maxValue<arguments[i]) {
        maxValue=arguments[i];
      }
    }
    return maxValue;
  }
