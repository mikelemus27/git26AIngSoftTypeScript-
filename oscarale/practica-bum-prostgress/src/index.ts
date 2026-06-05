import { Client } from "pg";

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "admin",
    password: "admin123",
    database: "escuela",
});

async function main() {

    try {

        await client.connect();

        console.log("Conexión exitosa a PostgreSQL");
          /*await client.query(
    "INSERT INTO usuarios(nombre) VALUES($1)",
    ["Pedro"]
);*/
        
        const result = await client.query(
            "SELECT * FROM usuarios"
        );

        console.log("\nUsuarios registrados:");

        console.log(result.rows);
           const dos = await client.query(
    "SELECT * FROM usuarios WHERE id = $1",
    [1]
);
console.log("\nbuscando usuario:");
console.log(dos.rows);
    } catch (error) {

        console.error(
            "Error al conectar:",
            error
        );

    } finally {

        await client.end();

    }

}
async function obtenerUsuarios() {

    const resultado = await client.query("SELECT nombre FROM usuarios");
    console.log(resultado.rows)

}
obtenerUsuarios();
main();
