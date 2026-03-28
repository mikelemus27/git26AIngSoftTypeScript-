import { IMonederoRepository } from "../IMonederoRepository.js";
import { Monedero } from "../../entities/Monedero.js";

export class MockMonederoRepository implements IMonederoRepository {
    private monederos: Map<string, Monedero> = new Map();

    async buscarPorId(id: string): Promise<Monedero> {
        const monedero = this.monederos.get(id);
        
        if (!monedero) {
            console.log(`No se encontró monedero para el ID: ${id}`);
            throw new Error(`Monedero no encontrado para el ID: ${id}`);
        }
        
        return monedero;
    }

    async guardar(monedero: Monedero): Promise<void> {
        this.monederos.set(monedero.getIdAlumno(), monedero);
    }
}