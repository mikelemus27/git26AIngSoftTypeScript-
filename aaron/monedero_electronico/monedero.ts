// Aaron Everardo Villegas Pelayo
// Módulo de Monedero Electrónico

const SALDO_MAXIMO = 5000;

export function realizarPago(saldo: number, monto: number): number {

    if (saldo > SALDO_MAXIMO) {
        throw new Error("El saldo excede el límite permitido");
    }
    if (monto < 0) {
        throw new Error("El monto de pago no puede ser negativo");
    }
    if (monto === 0) {
        return saldo;
    }
    if (monto > saldo) {
        throw new Error("Saldo Insuficiente");
    }

    const nuevoSaldo = saldo - monto;
    return Math.round(nuevoSaldo * 100) / 100;
}
export function cargarSaldo(saldo: number, monto: number): number {

    if (monto <= 0) {
        throw new Error("El monto de recarga debe ser positivo");
    }

    const nuevoSaldo = saldo + monto;

    if (nuevoSaldo > SALDO_MAXIMO) {
        throw new Error("Se supera el saldo máximo permitido");
    }

    return Math.round(nuevoSaldo * 100) / 100;
}