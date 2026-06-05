import { JugadorDTO } from "../../../dto/JugadorDTO";

export interface IListarJugadoresUseCase {
    execute(): Promise<JugadorDTO[]>;
}