import { CrearJugadorRequest } from "../../../../aplicacion/dto/CrearJugadorRequest";
import type { ICrearJugadorUseCase } from "../../../../aplicacion/ports/input/jugador/ICrearJugadorUseCase";
import type { IListarJugadoresUseCase } from "../../../../aplicacion/ports/input/jugador/IListarJugadorUseCase"; // 👈 Importamos la nueva interfaz
import type { IListarVideojuegosUseCase } from "../../../../aplicacion/ports/input/jugador/IListarVideojuegoUsecase";
export class JugadorController {
    constructor(
        private crearJugadorUseCase: ICrearJugadorUseCase,
        private listarJugadoresUseCase: IListarJugadoresUseCase,
        private listarVideojuegosUseCase: IListarVideojuegosUseCase
    ) {}

    crearJugador = async (dto: CrearJugadorRequest) => {
        try {
            const jugador = await this.crearJugadorUseCase.execute(dto);
            return jugador; 
        } catch (error: any) {
            return { error: error.message }; 
        }
    };

    listarJugadores = async () => {
        try {
            const jugadores = await this.listarJugadoresUseCase.execute();
            return jugadores; 
        } catch (error: any) {
            return { error: error.message };
        }
    };

    listarVideojuegos = async () => {
        try {
            const videojuegos = await this.listarVideojuegosUseCase.execute();
            return videojuegos; 
        } catch (error: any) {
            return { error: error.message };
        }
    };
}