export class Monedero {
    props;
    constructor(props) {
        this.props = props;
    }
    // Regla de Negocio: No se puede recargar más de $500
    validarMontoRecarga(monto) {
        return monto >= 50 && monto <= 500;
    }
    sumarSaldo(monto) {
        if (!this.validarMontoRecarga(monto)) {
            throw new Error("Monto de recarga inválido para las reglas del Tec-Café");
        }
        this.props.saldo += monto;
    }
    get saldoActual() {
        return this.props.saldo;
    }
}
//# sourceMappingURL=Monedero.js.map