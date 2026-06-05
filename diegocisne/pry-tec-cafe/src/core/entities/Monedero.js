"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monedero = void 0;
var Monedero = /** @class */ (function () {
    function Monedero(props) {
        this.props = props;
    }
    // Regla de Negocio: No se puede recargar más de $500
    Monedero.prototype.validarMontoRecarga = function (monto) {
        return monto >= 50 && monto <= 500;
    };
    Monedero.prototype.sumarSaldo = function (monto) {
        if (!this.validarMontoRecarga(monto)) {
            throw new Error("Monto de recarga inválido para las reglas del Tec-Café");
        }
        this.props.saldo += monto;
    };
    Object.defineProperty(Monedero.prototype, "saldoActual", {
        get: function () {
            return this.props.saldo;
        },
        enumerable: false,
        configurable: true
    });
    return Monedero;
}());
exports.Monedero = Monedero;
