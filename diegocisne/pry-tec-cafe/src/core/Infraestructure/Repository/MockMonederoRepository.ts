import { Monedero, MonederoProps } from "../../entities/Monedero";

export class MockMonederoRepository {
    private monederos: Map<string, MonederoProps> = new Map();

    async buscarPorId(id: string): Promise<Monedero> {
        const data = this.monederos.get(id);

        if (!data) {
            throw new Error(`Monedero no encontrado para el ID: ${id}`);
        }

        return new Monedero(data);
    }

    async guardar(monedero: Monedero): Promise<void> {
    const data = {
        idAlumno: monedero.getIdAlumno(),
        saldo: monedero.saldoActual
    };

    this.monederos.set(data.idAlumno, data);
}
}