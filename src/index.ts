import { Client } from "pg";

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "admin",
    password: "admin123",
    database: "escuela",
});
async function getUsersFromDB() {
        const result = await client.query(
            "SELECT * FROM usuarios"
        );

        console.log("\nUsuarios registrados:");

        console.log(result.rows);
}
async function main() {

    try {

        await client.connect();

        console.log("Conexión exitosa a PostgreSQL");

         getUsersFromDB();
        await client.query(
             "INSERT INTO usuarios(nombre) VALUES($1)",
            ["Pedro"]
);
       const result2 = await client.query(
            "SELECT * FROM usuarios"
        );

        console.log("\nUsuarios registrados: ");
        console.log(result2.rows);


    } catch (error) {

        console.error(
            "Error al conectar:",
            error
        );

    } finally {

        await client.end();

    }

}

main();
