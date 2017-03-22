
//"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
//import Medida from './medida.js';

class Medida{

    constructor(dato){
         var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCKk])/;
         var m = dato.match(regexp);
         var num = m[1];
         var type = m[2];
         num = parseFloat(num);
         this.num_ = num;
         this.type_ = type;
    }
    to_s(){
        var a = this.num_.toFixed(1) + this.type_.toFixed(1);
        console.log(a)
        return a;
    }
    //Geter
    get valor(){
        return this.num_;
    }

    get tipo(){
        return this.type_;
    }

    //Seter
   set valor(value){
        this.num=value;
    }

    set tipo(value){
        this.type=value;
    }



}





class Temperatura extends Medida{

        constructor(dato){
              super(dato)
              if ( this.type_ == "C" || this.type_ == "F" || this.type_ == "K" ||
                  this.type_ == "c" || this.type_ == "f" || this.type_ == "k" ){

                    console.log("UNIDAD DE TEMPERATURA: " + this.type_ );

              }else  console.log("UNIDAD DE TEMPERATURA INCORRECTA");

        }


}



    class Celsius extends Temperatura{

        constructor(dato){
            super(dato)
        }


        to_k(){

            var result;
            result = (this.valor + 273);
            result = result.toFixed(1) +"k";

            var n = new Kelvin(result);

            return n;
         }

         to_f(){

            var result;
            result = (this.valor * 1.8) + 32;
            result = result.toFixed(1) +"f";

            var n = new Farenheit(result);

            return n;
         }
    }





    class Farenheit extends Temperatura{

        constructor(dato){
            super(dato)
        }


        to_c(){

            var result;
            result = (this.valor - 32)*5/9;
            result = result.toFixed(1)+"c";

            var n = new Celsius(result);

            return n;
         }


        to_k(){

            var result;
            result = (5*(this.valor - 32)/9) + 273.15;
            result = result.toFixed(1) +"k";

            var n = new Kelvin(result);

            return n;
        }
    }


     class Kelvin extends Temperatura{

        constructor(dato){
            super(dato)
        }

        to_c(){

            var result;
            result = (this.valor - 273);
            result = result.toFixed(1) +"c";

            var n = new Celsius(result);

            return n;
        }

        to_f(){

            var result;
            result = 1.8*(this.valor - 273)+ 32;
            result = result.toFixed(1) + "f";

            var n = new Farenheit(result);

            return n;
        }
    }


  function calculate() {

    var result;
    var temp = original.value;
    var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])/;
    var m = temp.match(regexp);
    var Cel;

    if (m == null){
      converted.innerHTML = "Unidad de temperatura incorrecta. Inserte C, K o F.";
    }

    else if (m[2]==="c" || m[2]==="C" ){
      Cel = new Celsius(temp);
      var k = Cel.to_k()
      var f = Cel.to_f()
      converted.innerHTML = k.valor + k.tipo + "\n" + f.valor + f.tipo;
    }
    else if (m[2]==="k" || m[2]==="K" ){
      Cel = new Kelvin(temp);
      var c = Cel.to_c()
      var f = Cel.to_f()
      converted.innerHTML = c.valor + c.tipo + "\n" + f.valor + f.tipo;
    }
    else if (m[2]==="f" || m[2]==="F" ){
      Cel = new Farenheit(temp);
      var c = Cel.to_c()
      var k = Cel.to_k()
      converted.innerHTML = c.valor + c.tipo + "\n" + k.valor + k.tipo;
    }

  }
