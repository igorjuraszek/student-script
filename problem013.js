function parametricSort(a, b) {
     
  if (b=='asc') {a.sort(function(a, b){return a - b}); return a;}
  else if (b=='desc'){
    a.sort(function(a, b){return a - b});
    a.reverse();

  return a;}

  else return false;
}
