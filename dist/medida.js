"use strict"; // Use ECMAScript 5 strict mode in browsers that support it


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

exports.default = Medida;