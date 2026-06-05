Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hola mundo");
  },
});

console.log("Servidor corriendo en puerto 3000");