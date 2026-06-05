import type { IJugadorRepositoryPort } from "../../../ports/output/IJugadorRepositoryport";
import type { IListarVideojuegosUseCase } from "../../../ports/input/jugador/IListarVideojuegoUsecase";
import { Videojuego } from "../../../../dominio/entities/videojuego";

export class ListarVideojuegosUseCase implements IListarVideojuegosUseCase {
    constructor(
        private jugadorRepository: IJugadorRepositoryPort
    ) {}

    async execute(): Promise<Videojuego[]> {
        return await this.jugadorRepository.findAllVideojuegos();
    }
}