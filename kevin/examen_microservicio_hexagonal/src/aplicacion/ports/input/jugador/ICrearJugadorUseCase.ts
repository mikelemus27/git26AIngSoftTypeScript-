import { CrearJugadorRequest } from "../../../dto/CrearJugadorRequest";
import { JugadorDTO } from "../../../dto/JugadorDTO";

export interface ICrearJugadorUseCase {
    execute(request: CrearJugadorRequest): Promise<JugadorDTO>;
}