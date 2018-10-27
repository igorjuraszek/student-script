function getTotalNumberOfNewYaersEveSundays(a, b) {
var sundays = 0;
  for (a; a < b+1; a++) {
    if(new Date(a,0).getDay()==0){
      sundays++;
    }
  }
  return sundays;
}
