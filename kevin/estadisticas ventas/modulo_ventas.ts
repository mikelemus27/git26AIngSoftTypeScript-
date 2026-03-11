export const ObtenerPromedio = (ventas: number[]): number => //variable tipo cadena
             { if (ventas.length === 0) throw new Error("ningun registro");
              const suma = ventas.reduce((acc, precio) => acc + precio, 0);
              return suma / ventas.length;
              };