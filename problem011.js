function deepFindAndCount(a, b) {

  var licznik = 0;
  var x = 0;
  do{

    x = a.shift();

    if(Array.isArray(x)==true){
      for(var i = 0 ; i<x.length ; i++){
        if (x[i] == b) licznik++;

      }

    }
    else if(x == b) licznik++;


  }while(x!=undefined);


  return licznik;
}
