

import { Monedero } from "../src/core/entities/Monedero"

const Objmonedero = new Monedero(
        { idAlumno: "12345", saldo: 500}
    );

describe ("pruebas de Nomina Tec-Cafe", () => {

    test("Recarga debe ser entre 50 y 500",
        () => { expect (
                        Objmonedero.validarMontoRecarga(50)
                        ).toBe(true);}
    );

    test("recarga mayor a 500 imposible",
        () => {expect (
                        Objmonedero.validarMontoRecarga(600)
                        ).toBe(true);} 
    )

    test('recarga menor a 50 imposible',
        () => { expect (
                        Objmonedero.validarMontoRecarga(40)
                        ).toBe(true);}
    )
})