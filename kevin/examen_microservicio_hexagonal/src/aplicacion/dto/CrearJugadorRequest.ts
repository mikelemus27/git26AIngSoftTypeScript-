export class CrearJugadorRequest {
    constructor(
        public readonly nickname: string,
        public readonly email: string,
        public readonly videojuegoId: number | null
    ) {}
}