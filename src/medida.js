"use strict"; // Use ECMAScript 5 strict mode in browsers that support it


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
   
export default Medida;


  