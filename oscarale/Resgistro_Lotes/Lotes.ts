// Tipo de tupla para un lote
export type Lote = [number, number, number]; 
// [idLote, diasDesdeCosecha, temperatura]

// 1️⃣ Validar que el ID del lote sea positivo
export function validarId(lote: Lote): boolean {
    return lote[0] > 0;
}

// 2️⃣ Validar que los días desde la cosecha no sean negativos
export function validarDias(lote: Lote): boolean {
    return lote[1] >= 0;
}

// 3️⃣ Validar temperatura de almacenamiento correcta (0 a 25)
export function validarTemperatura(lote: Lote): boolean {
    return lote[2] >= 0 && lote[2] <= 25;
}

// 4️⃣ Determinar si el lote está fresco (menos de 30 días)
export function esFresco(lote: Lote): boolean {
    return lote[1] < 30;
}

// 5️⃣ Determinar si el lote está vencido
export function estaVencido(lote: Lote): boolean {
    return lote[1] >= 30;
}

// 6️⃣ Verificar si la temperatura es ideal (10 a 20)
export function temperaturaIdeal(lote: Lote): boolean {
    return lote[2] >= 10 && lote[2] <= 20;
}

// 7️⃣ Obtener estado del lote
export function estadoLote(lote: Lote): string {
    if (lote[1] < 15) return "Fresco";
    if (lote[1] < 30) return "Consumir pronto";
    return "Vencido";
}

// 8️⃣ Calcular riesgo de deterioro
export function riesgoDeterioro(lote: Lote): string {
    if (lote[2] > 20) return "Alto";
    if (lote[2] >= 10) return "Medio";
    return "Bajo";
}

// 9️⃣ Validar completamente un lote
export function loteValido(lote: Lote): boolean {
    return validarId(lote) && validarDias(lote) && validarTemperatura(lote);
}

// 🔟 Obtener resumen del lote
export function resumenLote(lote: Lote): string {
    return `Lote ${lote[0]} - Estado: ${estadoLote(lote)}`;
}