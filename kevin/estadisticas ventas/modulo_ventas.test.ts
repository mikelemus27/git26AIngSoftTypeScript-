import { ObtenerPromedio } from './modulo_ventas';
describe('Modulo de estadisticas de ventas', () => {
    test('esta vacio',() => { 
        expect(ObtenerPromedio([])).toThrow('error'); });
    
});
