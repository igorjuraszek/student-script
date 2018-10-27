function divisible() {
  var isDivisible = true;
    for (var i=0; i < arguments.length; i++) {
      if (arguments[0]%arguments[i]!=0){
        isDivisible = false;
      }
    }
    return isDivisible;
}
