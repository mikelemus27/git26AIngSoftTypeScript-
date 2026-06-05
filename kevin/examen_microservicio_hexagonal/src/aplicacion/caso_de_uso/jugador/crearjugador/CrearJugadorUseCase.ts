import type { IJugadorRepositoryPort } from "../../../ports/output/IJugadorRepositoryport";
import { Jugador } from "../../../../dominio/entities/jugador";
import { JugadorDTO } from "../../../dto/JugadorDTO";
import { CrearJugadorRequest } from "../../../dto/CrearJugadorRequest";
import type { ICrearJugadorUseCase } from "../../../ports/input/jugador/ICrearJugadorUseCase";

export class CrearJugadorUseCase implements ICrearJugadorUseCase {
    constructor(
        private jugadorRepository: IJugadorRepositoryPort
    ) {}

    async execute(request: CrearJugadorRequest): Promise<JugadorDTO> {
        // 1. Validar unicidad del Nickname
        const exists = await this.jugadorRepository.existsByNickname(request.nickname);
        if (exists) {
            throw new Error("El nickname ya está en uso por otro jugador");
        }

        const jugador = Jugador.crear(
            request.nickname,
            request.email,
            request.videojuegoId
        );

        const saved = await this.jugadorRepository.save(jugador);

        return new JugadorDTO(
            saved.id!,
            saved.nickname,
            saved.email,
            saved.videojuegoId
        );
    }
}