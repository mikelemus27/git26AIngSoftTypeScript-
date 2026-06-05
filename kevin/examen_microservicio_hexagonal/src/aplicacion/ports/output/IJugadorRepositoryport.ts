import { Jugador } from "../../../dominio/entities/jugador";
import { Videojuego } from "../../../dominio/entities/videojuego";
export interface IJugadorRepositoryPort {
    save(jugador: Jugador): Promise<Jugador>;
    existsByNickname(nickname: string): Promise<boolean>;
    findAll(): Promise<Jugador[]>;
    findAllVideojuegos(): Promise<Videojuego[]>;
}