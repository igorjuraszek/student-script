function reverse(a){
  function b(){

    var args=[];
    var x = 0;
    for(var i = arguments.length-1; i>=0; i--){
      args[x]=arguments[i];
      x++;
    }
    return a.apply(null,args);
  }
  return b;
}
