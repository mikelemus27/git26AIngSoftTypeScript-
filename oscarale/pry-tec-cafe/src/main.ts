import { Monedero } from "./core/entities/Monedero"

function main() {
    const objmonedero = new Monedero(
        { idAlumno: "12345", saldo: 100 }
    );

    console.log("Saldo inicial:", objmonedero.saldoActual);
}