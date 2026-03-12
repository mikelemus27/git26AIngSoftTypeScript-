export const ObtenerPromedio = (ventas: number[]): number => //variable tipo cadena
             { if(ventas.length === 0) throw new Error('No hay ninguna venta');
                if (ventas.some(v => v < 0)) throw new Error('Venta negativa detectada');
                if (ventas.length > 99) throw new Error('Lista demasiado larga');
              const suma = ventas.reduce((acc, precio) => acc + precio, 0);
              return suma / ventas.length;
              };