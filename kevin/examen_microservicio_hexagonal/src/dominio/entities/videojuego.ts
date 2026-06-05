export class Videojuego {
    constructor(
        public readonly id: number | null,
        public readonly titulo: string,
        public readonly genero: string
    ) {}

    public static reconstruir(id: number, titulo: string, genero: string): Videojuego {
        return new Videojuego(id, titulo, genero);
    }
}