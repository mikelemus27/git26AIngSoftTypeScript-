import {
    validarId,
    validarDias,
    validarTemperatura,
    esFresco,
    estaVencido,
    temperaturaIdeal,
    estadoLote,
    riesgoDeterioro,
    loteValido,
    resumenLote
} from "./Lotes";

describe("Pruebas del módulo de registro de lotes", () => {

test("1. ID válido", () => {
    expect(validarId([1,10,15])).toBe(true);
});

//test("2. ID inválido", () => {
    //expect(validarId([0,10,15])).toBe(false);
//});

//test("3. Días válidos", () => {
    //expect(validarDias([1,5,15])).toBe(true);
//});

//test("4. Temperatura válida", () => {
    //expect(validarTemperatura([1,5,20])).toBe(true);
//});

//test("5. Lote fresco", () => {
    //expect(esFresco([1,10,15])).toBe(true);
//});

//test("6. Lote vencido", () => {
    //expect(estaVencido([1,35,15])).toBe(true);
//});

//test("7. Temperatura ideal", () => {
    //expect(temperaturaIdeal([1,10,15])).toBe(true);
//});

//test("8. Estado del lote", () => {
    //expect(estadoLote([1,20,15])).toBe("Consumir pronto");
//});

//test("9. Lote completamente válido", () => {
    //expect(loteValido([2,10,15])).toBe(true);
//});

//test("10. Resumen del lote", () => {
    //expect(resumenLote([3,5,12])).toBe("Lote 3 - Estado: Fresco");
//});

});