import {Monedero} from "../entities/Monedero.js"

export interface IMonederoRepository {
    buscarPorId(id: string): Promise<Monedero>;
    guardar(monedero: Monedero): Promise<void>;
}
