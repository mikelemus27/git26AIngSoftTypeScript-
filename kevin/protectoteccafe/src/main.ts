import { Monedero } from "./core/entities/Monedero.js"; 
console.log("--- Iniciando Sistema Tec-Cafe (CLI) ---");
function main() {
    const Objmonedero = new Monedero(
        {idAlumno : '12345', saldo:100}
    );
    console.log('saldo inicial:',Objmonedero.saldoActual)
}
main();