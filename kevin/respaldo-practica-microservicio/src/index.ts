import { Client } from "pg";

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "admin",
    password: "admin123",
    database: "escuela",
});

await client.connect();
console.log("CONECTADO A LA BASE DE DATOS")
const server = Bun.serve(
  {
   port: 3000,
  async fetch(req) {
    
        const url = new URL(req.url);
           console.log ("servdor corriendo")
        if (url.pathname === "/usuarios") {
             console.log ("peticion /usuarios")
            const result = await client.query(
                "SELECT * FROM usuarios;"
            );

            return Response.json(result.rows);
        }

        return new Response("OK");
    },
  });
console.log("el servidor esta  corriendo en http://127.0.0.1:"+server.port);