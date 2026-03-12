export const ObtenerPromedio = (ventas: number[]): number => //variable tipo cadena
             { if(ventas.length === 0) throw new Error('No hay ninguna venta');
                if (ventas.some(v => v < 0)) throw new Error('Venta negativa detectada');
              const suma = ventas.reduce((acc, precio) => acc + precio, 0);
              return suma / ventas.length;
              };