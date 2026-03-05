import { aplicarDescuento } from './calculos';
describe('Pruebas de Nómina Tec-Café', () => { 
    //prueba1
    test('Debe aplicar 15% de descuento a alumnos de Sistemas', 
        () => { expect(aplicarDescuento(100, true)).toBe(85); });
//prueba2
   test('No debe aplicar descuento a otros alumnos', () => {
    expect(aplicarDescuento(100, false)).toBe(100);   });
//
   test('Debe lanzar error si el total es negativo', () => {
    expect(() => aplicarDescuento(-1, true)).toThrow("Total negativo");});

     test('No debe aplicar descuento si total > 1000', () => {
    expect(aplicarDescuento(1100, false)).toBe(1100);   });

});
