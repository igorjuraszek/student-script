var Vectors = {

    sum : function(a,b) {
        var wynik = [];

      if(a.length!=b.length) return false;

      for(var i = 0 ; i<a.length ; i++){
        wynik[i] = a[i] + b[i];

      }
      return wynik;
    },

    mulByScalar : function(a,b){
      var wynik = [];
      if(a.length>=1 && b.length == undefined){

        for (var i = 0 ; i<a.length ; i++){

          wynik[i] = a[i]*b;
        }
        return wynik;
      }
      else return false;
    }
};
