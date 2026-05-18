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

        /*RETO 1 INSERTAR USUARIO DESDE TYPESCRIPT  
        await client.query(
    "INSERT INTO usuarios(nombre) VALUES($1)",
    ["Pedro"]
);*/

        const result = await client.query(
            "SELECT * FROM usuarios"
        );

        console.log("\nUsuarios registrados:");
        console.log(result.rows);
        /* RETO 2 CONSULTA POR ID
        const result2 = await client.query(
            "SELECT * FROM usuarios WHERE id = $1",
        [1]);
        console.log("\nbusqueda de usuario, el usuario es:");
        console.log(result2.rows);*/
        
    } catch (error) {

        console.error(
            "Error al conectar:",
            error
        );

    } finally {

        await client.end();

    }

}
//RETO 3 FUNCION REUTILIZABLE
async function obtenerUsuarios() {
        console.log("muestra de la tabla para mostrar funcionamiento de una funcion utilizable");
        const result2 = await client.query(
            "SELECT nombre FROM usuarios"
        );
        console.log(result2.rows);
}
obtenerUsuarios();
main();


