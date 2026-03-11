import { sumar } from './calculadora';

test('debe sumar 2 + 3 y retornar 5', () => {
  expect(sumar(2, 3)).toBe(5);
});