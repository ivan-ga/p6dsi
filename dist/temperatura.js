"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _medida = require("./medida.js");

var _medida2 = _interopRequireDefault(_medida);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//"use strict"; // Use ECMAScript 5 strict mode in browsers that support it


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
}(_medida2.default);

var Celsius = function (_Temperatura) {
  _inherits(Celsius, _Temperatura);

  function Celsius(dato) {
    _classCallCheck(this, Celsius);

    var _this2 = _possibleConstructorReturn(this, (Celsius.__proto__ || Object.getPrototypeOf(Celsius)).call(this, dato));

    if (_this2.type_ == "C" || _this2.type_ == "c") {

      console.log("UNIDAD DE TEMPERATURA Celsius: " + _this2.type_);
    } else console.log("UNIDAD DE TEMPERATURA Celsius INCORRECTA");
    return _this2;
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
      result = this.valor * 9 / 5 + 32;
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

    var _this3 = _possibleConstructorReturn(this, (Farenheit.__proto__ || Object.getPrototypeOf(Farenheit)).call(this, dato));

    if (_this3.type_ == "F" || _this3.type_ == "f") {

      console.log("UNIDAD DE TEMPERATURA Farenheit: " + _this3.type_);
    } else console.log("UNIDAD DE TEMPERATURA Farenheit INCORRECTA");
    return _this3;
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

    var _this4 = _possibleConstructorReturn(this, (Kelvin.__proto__ || Object.getPrototypeOf(Kelvin)).call(this, dato));

    if (_this4.type_ == "K" || _this4.type_ == "k") {

      console.log("UNIDAD DE TEMPERATURA Farenheit: " + _this4.type_);
    } else console.log("UNIDAD DE TEMPERATURA Farenheit INCORRECTA");
    return _this4;
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

var paco = new Celsius("15C");

var pepe = new Farenheit("15F");

//var cambio = 
var re = paco.to_f();
console.log("Celsius a Farenheit " + re.valor);

var re = paco.to_k();
console.log("Celsius a Kelvin " + re.valor);
var ra = pepe.to_c();
console.log("Farenheit a Celsius " + ra.valor);

var rp = pepe.to_k();
console.log("Farenheit a Kelvin " + rp.valor);

var pancho = new Kelvin("15K");

var rik = pancho.to_c();
console.log("Kelvin a Celsius: " + rik.valor);
var rik = pancho.to_f();
console.log("Kelvin a Farenheit: " + rik.valor);

function calculate() {
  console.log("vamoss");
  var result;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  var p = /(c|C)/;
  var m = temp.match(regexp);
  switch (m[2]) {
    case p:
      var Cel = new Celsius(temp);

      break;

    default:
      //Sentencias_def ejecutadas cuando no ocurre una coincidencia con los anteriores casos
      break;
  }
  converted.innerHTML = Cel.to_s;
}