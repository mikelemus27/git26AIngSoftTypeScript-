import { realizarPago } from "./monedero";

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
    });