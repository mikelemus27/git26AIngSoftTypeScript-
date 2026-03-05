//creacion de funcion de  flecha  gorda ( fat arrow)
export const aplicarDescuento = (total: number, esSistemas: boolean): number => 
             { if (total < 0) throw new Error("Total negativo");
                return esSistemas ? total * 0.85 : total; 
              };
