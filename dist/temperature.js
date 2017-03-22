"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
//import Medida from './medida.js';

var Medida = function () {
    function Medida(dato) {
        _classCallCheck(this, Medida);

        var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCKk])/;
        var m = dato.match(regexp);
        var num = m[1];
        var type = m[2];
        num = parseFloat(num);
        this.num_ = num;
        this.type_ = type;
    }

    _createClass(Medida, [{
        key: "to_s",
        value: function to_s() {
            var a = this.num_.toFixed(1) + this.type_.toFixed(1);
            console.log(a);
            return a;
        }
        //Geter

    }, {
        key: "valor",
        get: function get() {
            return this.num_;
        },


        //Seter
        set: function set(value) {
            this.num = value;
        }
    }, {
        key: "tipo",
        get: function get() {
            return this.type_;
        },
        set: function set(value) {
            this.type = value;
        }
    }]);

    return Medida;
}();

var Temperatura = function (_Medida) {
    _inherits(Temperatura, _Medida);

    function Temperatura(dato) {
        _classCallCheck(this, Temperatura);

        var _this = _possibleConstructorReturn(this, (Temperatura.__proto__ || Object.getPrototypeOf(Temperatura)).call(this, dato));

        if (_this.type_ == "C" || _this.type_ == "F" || _this.type_ == "K" || _this.type_ == "c" || _this.type_ == "f" || _this.type_ == "k") {

            console.log("UNIDAD DE TEMPERATURA: " + _this.type_);
        } else console.log("UNIDAD DE TEMPERATURA INCORRECTA");

        return _this;
    }

    return Temperatura;
}(Medida);

var Celsius = function (_Temperatura) {
    _inherits(Celsius, _Temperatura);

    function Celsius(dato) {
        _classCallCheck(this, Celsius);

        return _possibleConstructorReturn(this, (Celsius.__proto__ || Object.getPrototypeOf(Celsius)).call(this, dato));
    }

    _createClass(Celsius, [{
        key: "to_k",
        value: function to_k() {

            var result;
            result = this.valor + 273;
            result = result.toFixed(1) + "k";

            var n = new Kelvin(result);

            return n;
        }
    }, {
        key: "to_f",
        value: function to_f() {

            var result;
            result = this.valor * 1.8 + 32;
            result = result.toFixed(1) + "f";

            var n = new Farenheit(result);

            return n;
        }
    }]);

    return Celsius;
}(Temperatura);

var Farenheit = function (_Temperatura2) {
    _inherits(Farenheit, _Temperatura2);

    function Farenheit(dato) {
        _classCallCheck(this, Farenheit);

        return _possibleConstructorReturn(this, (Farenheit.__proto__ || Object.getPrototypeOf(Farenheit)).call(this, dato));
    }

    _createClass(Farenheit, [{
        key: "to_c",
        value: function to_c() {

            var result;
            result = (this.valor - 32) * 5 / 9;
            result = result.toFixed(1) + "c";

            var n = new Celsius(result);

            return n;
        }
    }, {
        key: "to_k",
        value: function to_k() {

            var result;
            result = 5 * (this.valor - 32) / 9 + 273.15;
            result = result.toFixed(1) + "k";

            var n = new Kelvin(result);

            return n;
        }
    }]);

    return Farenheit;
}(Temperatura);

var Kelvin = function (_Temperatura3) {
    _inherits(Kelvin, _Temperatura3);

    function Kelvin(dato) {
        _classCallCheck(this, Kelvin);

        return _possibleConstructorReturn(this, (Kelvin.__proto__ || Object.getPrototypeOf(Kelvin)).call(this, dato));
    }

    _createClass(Kelvin, [{
        key: "to_c",
        value: function to_c() {

            var result;
            result = this.valor - 273;
            result = result.toFixed(1) + "c";

            var n = new Celsius(result);

            return n;
        }
    }, {
        key: "to_f",
        value: function to_f() {

            var result;
            result = 1.8 * (this.valor - 273) + 32;
            result = result.toFixed(1) + "f";

            var n = new Farenheit(result);

            return n;
        }
    }]);

    return Kelvin;
}(Temperatura);

function calculate() {

    var result;
    var temp = original.value;
    var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])/;
    var m = temp.match(regexp);
    var Cel;

    if (m == null) {
        converted.innerHTML = "Unidad de temperatura incorrecta. Inserte C, K o F.";
    } else if (m[2] === "c" || m[2] === "C") {
        Cel = new Celsius(temp);
        var k = Cel.to_k();
        var f = Cel.to_f();
        converted.innerHTML = k.valor + k.tipo + "\n" + f.valor + f.tipo;
    } else if (m[2] === "k" || m[2] === "K") {
        Cel = new Kelvin(temp);
        var c = Cel.to_c();
        var f = Cel.to_f();
        converted.innerHTML = c.valor + c.tipo + "\n" + f.valor + f.tipo;
    } else if (m[2] === "f" || m[2] === "F") {
        Cel = new Farenheit(temp);
        var c = Cel.to_c();
        var k = Cel.to_k();
        converted.innerHTML = c.valor + c.tipo + "\n" + k.valor + k.tipo;
    }
}