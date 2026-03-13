import { realizarPago, cargarSaldo } from "./monedero";

describe("Monedero Electrónico", () => {

    test("Pago menor al saldo", () => {
        expect(realizarPago(100, 40)).toBe(60);
    });

    test("Pago exacto al saldo", () => {
        expect(realizarPago(100, 100)).toBe(0);
    });

    test("Pago mayor al saldo", () => {
        expect(() => realizarPago(50, 100)).toThrow("Saldo Insuficiente");
    });

    test("Carga de saldo", () => {
        expect(cargarSaldo(100, 200)).toBe(300);
    });

    test("Monto de pago 0", () => {
        expect(realizarPago(100, 0)).toBe(100);
    });

    test("Saldo inicial 0", () => {
        expect(() => realizarPago(0, 10)).toThrow("Saldo Insuficiente");
    });

    test("Pago con centavos", () => {
        expect(realizarPago(10.50, 3.25)).toBe(7.25);
    });

    test("Saldo máximo permitido", () => {
        expect(cargarSaldo(4900, 100)).toBe(5000);
    });

    test("Pago negativo", () => {
        expect(() => realizarPago(100, -20)).toThrow("El monto de pago no puede ser negativo");
    });

    test("Saldo resultante pequeño", () => {
        expect(realizarPago(1, 0.99)).toBe(0.01);
    });

});