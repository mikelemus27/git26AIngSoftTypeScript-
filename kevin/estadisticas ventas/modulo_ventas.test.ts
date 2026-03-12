import { ObtenerPromedio } from './modulo_ventas';
describe('Modulo de estadisticas de ventas', () => {
    
    test('Arreglo vacio', () => {
    expect(() => ObtenerPromedio([])).toThrow('No hay ninguna venta');
    });
    test('Arreglo con una sola venta.', () => { 
        const ventas : number[] = [85];
        expect(ObtenerPromedio(ventas)).toBe(85);
    });
    test('Ventas con decimales.', () => { 
        const ventas : number[] = [10.5, 20.5, 30.0];
        expect(ObtenerPromedio(ventas)).toBeCloseTo(20.33, 2);
    });
    test('Ventas con valor 0', () => { 
        const ventas: number[] = [0];
        expect(ObtenerPromedio(ventas)).toBe(0);
    });
});
