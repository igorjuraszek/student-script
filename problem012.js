function objectsDiff(a, b) {
  var temp1 = [];
  var temp2 =[];
  var licznik = 0;
  var wynik = [];

 for(var property in a){

   temp1[licznik] = property;
   licznik++;

 }

  licznik = 0 ;

  for(var property in b){

   temp2[licznik] = property;
   licznik++;

 }
  licznik = 0;

  if(temp1.length<1) return temp2;
  if(temp2.length<1) return temp1;

  for(var i = 0 ; i<temp1.length ; i++){


      if(temp1[i]!=temp2[0]&&temp1[i]!=temp2[1]&&temp1[i]!=temp2[2]) {wynik[licznik]=temp1[i]; licznik++}

  }

   for(var i = 0 ; i<temp2.length ; i++){


      if(temp2[i]!=temp1[0]&&temp2[i]!=temp1[1]&&temp2[i]!=temp1[2]) {wynik[licznik]=temp2[i]; licznik++;}

  }

  return wynik;
}
