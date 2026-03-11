import { ObtenerPromedio } from './modulo_ventas';
describe('Modulo de estadisticas de ventas', () => {
    test('esta vacio',() => { //Arreglo vacío (debe retornar 0 o error).
        expect(ObtenerPromedio([])).toThrow('error'); });
    
});
