export const ObtenerPromedio = (ventas: number[]): number => //variable tipo cadena
             { if(ventas.length === 0) throw new Error('No hay ninguna venta');
              const suma = ventas.reduce((acc, precio) => acc + precio, 0);
              return suma / ventas.length;
              };