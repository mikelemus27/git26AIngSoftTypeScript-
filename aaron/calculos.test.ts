import { aplicarDescuento } from './calculos';
describe('Pruebas de Nómina Tec-Café', () => {
   //prueba1
   test('Debe aplicar 15% de descuento a alumnos de Sistemas',
       () => { expect(aplicarDescuento(100, true)).toBe(85); });
//prueba2
  test('No debe aplicar descuento a otros alumnos', () => {
   expect(aplicarDescuento(100, false)).toBe(100);   });
//prueba3
  test('Debe lanzar error si el total es negativo', () => {
   expect(() => aplicarDescuento(-1, true)).toThrow("Total negativo");});

//prueba4
  test('No tiene que aplicar descuento si el total es mayor a 1000', () => {
   expect(aplicarDescuento(1500, true)).toBe(1500);
  });

});