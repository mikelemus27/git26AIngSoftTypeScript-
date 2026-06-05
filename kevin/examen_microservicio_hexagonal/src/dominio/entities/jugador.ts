export class Jugador {
    private constructor(
        private _id: number | null,
        private _nickname: string,
        private _email: string,
        private _videojuegoId: number | null
    ) {}

    public static crear(nickname: string, email: string, videojuegoId: number | null = null): Jugador {
        return new Jugador(null, nickname, email, videojuegoId);
    }

    public static reconstruir(id: number, nickname: string, email: string, videojuegoId: number | null): Jugador {
        return new Jugador(id, nickname, email, videojuegoId);
    }

    public seleccionarVideojuego(videojuegoId: number | null): void {
        this._videojuegoId = videojuegoId;
    }

    get id(): number | null { return this._id; }
    get nickname(): string { return this._nickname; }
    get email(): string { return this._email; }
    get videojuegoId(): number | null { return this._videojuegoId; }
}