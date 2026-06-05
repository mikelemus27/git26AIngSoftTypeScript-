import { IMonederoRepository } from '../infraestructure/IMonederoRepository.js';

export class RecargarSaldoUseCase {
    constructor(private repository: IMonederoRepository) {}

    async ejecutar(idAlumno: string, monto: number): Promise<number> {
        const monedero = await this.repository.buscarPorId(idAlumno);

        monedero.sumarSaldo(monto);

        await this.repository.guardar(monedero);

        return monedero.saldoActual;
    }
}
