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
    test('Arreglo con números negativos (debe ignorarlos o lanzar error).', () => { 
        const ventas: number[] = [-1];
        expect(() => ObtenerPromedio(ventas)).toThrow('Venta negativa detectada'); 
    });
    test('Lista de ventas muy larga (100 elementos).', () => {
        const ventas100mas = new Array(100).fill(10);
        expect(() => ObtenerPromedio(ventas100mas)).toThrow('Lista demasiado larga');
    });
    test('Ventas todas iguales.', () => {
        const ventasIguales = [22,22];
        expect(ObtenerPromedio(ventasIguales)).toBe(ventasIguales[0]);
    });
    test('promedio con decimal periódico (10/3)', () => {
        const ventasPeriodicas: number[] = [5, 5, 12];
        expect(ObtenerPromedio(ventasPeriodicas)).toBeCloseTo(7.33, 2);
    });
    test('detección de valores nulos', () => {
        const ventasConNulo: (number | null)[] = [null, 20, 30];
        expect(() => ObtenerPromedio(ventasConNulo as number[])).toThrow('La lista contiene valores nulos');
    });
});
