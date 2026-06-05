import { Pool } from "pg";
import type { IJugadorRepositoryPort } from "../../../../aplicacion/ports/output/IJugadorRepositoryport";
import { Jugador } from "../../../../dominio/entities/jugador";
import { Videojuego } from "../../../../dominio/entities/videojuego";

export class JugadorRepositoryImpl implements IJugadorRepositoryPort {
    constructor(private db: Pool) {}

    private reconstruirJugador(row: any): Jugador {
        return Jugador.reconstruir(
            row.id,
            row.nickname,
            row.email,
            row.videojuego_id 
        );
    }

    async save(jugador: Jugador): Promise<Jugador> {
        if (jugador.id === null) {
            const result = await this.db.query(
                `
                INSERT INTO jugador(nickname, email, videojuego_id)
                VALUES($1, $2, $3)
                RETURNING *
                `,
                [jugador.nickname, jugador.email, jugador.videojuegoId]
            );
            return this.reconstruirJugador(result.rows[0]);
        }

        const result = await this.db.query(
            `
            UPDATE jugador
            SET nickname = $1,
                email = $2,
                videojuego_id = $3
            WHERE id = $4
            RETURNING *
            `,
            [jugador.nickname, jugador.email, jugador.videojuegoId, jugador.id]
        );
        return this.reconstruirJugador(result.rows[0]);
    }

    async existsByNickname(nickname: string): Promise<boolean> {
        const result = await this.db.query(
            `
            SELECT EXISTS(
                SELECT 1 FROM jugador WHERE nickname = $1
            )
            `,
            [nickname]
        );
        return result.rows[0].exists;
    }
    async findAll(): Promise<Jugador[]> {
    const result = await this.db.query(
        "SELECT id, nickname, email, videojuego_id FROM jugador ORDER BY id ASC"
    );

    return result.rows.map(row => 
        Jugador.reconstruir(
            row.id,
            row.nickname,
            row.email,
            row.videojuego_id
        )
    );
}
async findAllVideojuegos(): Promise<Videojuego[]> {
    const result = await this.db.query(
        "SELECT id, titulo, genero FROM videojuego ORDER BY id ASC"
    );

    return result.rows.map(row => 
        Videojuego.reconstruir(row.id, row.titulo, row.genero)
    );
}
}