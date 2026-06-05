import type { IJugadorRepositoryPort } from "../../../ports/output/IJugadorRepositoryport";
import { JugadorDTO } from "../../../dto/JugadorDTO";
import type { IListarJugadoresUseCase } from "../../../ports/input/jugador/IListarJugadorUseCase"; 
export class ListarJugadoresUseCase implements IListarJugadoresUseCase { 
    constructor(
        private jugadorRepository: IJugadorRepositoryPort
    ) {}

    async execute(): Promise<JugadorDTO[]> {
        const jugadores = await this.jugadorRepository.findAll();

        return jugadores.map(
            jugador => {
                const id = jugador.id!;
                const nickname = (jugador as any)._nickname || jugador.nickname;
                const email = (jugador as any)._email || jugador.email;
                const videojuegoId = (jugador as any)._videojuegoId !== undefined ? (jugador as any)._videojuegoId : jugador.videojuegoId;

                return new JugadorDTO(id, nickname, email, videojuegoId);
            }
        );
    }
}