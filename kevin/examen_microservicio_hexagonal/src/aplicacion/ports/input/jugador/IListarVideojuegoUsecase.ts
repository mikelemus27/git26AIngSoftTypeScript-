import { Videojuego } from "../../../../dominio/entities/videojuego";
export interface IListarVideojuegosUseCase {
    execute(): Promise<Videojuego[]>;
}