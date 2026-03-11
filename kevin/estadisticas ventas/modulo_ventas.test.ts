import { ObtenerPromedio } from './modulo_ventas';
describe('Modulo de estadisticas de ventas', () => {
    test('esta vacio',() => { //Arreglo vacío (debe retornar 0 o error).
        expect(ObtenerPromedio([])).toThrow('error'); });
    test('una sola venta', () => { //Arreglo con una sola venta.
        const ventas = [85];
        expect(ObtenerPromedio(ventas)).toBe(85);
    });
    test('varias ventas con decimales', () => { //Ventas con decimales.
        const ventas = [10.5, 20.5, 30.0];
        expect(ObtenerPromedio(ventas)).toBeCloseTo(20.33, 2);
    });
});
