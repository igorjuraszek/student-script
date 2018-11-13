var Stack = {
     stos: [],

      push : function(a,b){
      if (b===undefined) this.stos.unshift(a);

      else{
        for(var i = 0 ; i<b-1 ; i++){

        this.stos.unshift(null);
      }

      this.stos.unshift(a);
      }

    },

    pop : function(a){

	    var temp = [];
	  if (a===undefined) {temp[0]=this.stos.shift(); var x = 0; x = temp[0]; return x;}
           
      for(var i = 0; i<a ; i++){

        temp[i] = this.stos.shift();
      }

      temp.reverse();
      var x = 0;
      x =  temp[0];
      return x;

    }
};
