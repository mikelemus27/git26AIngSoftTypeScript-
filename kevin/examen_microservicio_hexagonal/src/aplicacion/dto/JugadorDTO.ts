export class JugadorDTO {
    constructor(
        public readonly id: number,
        public readonly nickname: string,
        public readonly email: string,
        public readonly videojuegoId: number | null
    ) {}
}