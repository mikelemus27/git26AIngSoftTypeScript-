export const aplicarDescuento = (total: number, esSistemas: boolean): number => {

  if (total < 0) {
    throw new Error("Total negativo");
  }

  if (total > 1001) {
    return total;
  }

  if (esSistemas) {
    return total * 0.85;
  }

  return total;
};