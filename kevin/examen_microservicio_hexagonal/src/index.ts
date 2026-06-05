import { db } from "./database/postgres";
import { JugadorRepositoryImpl } from "./infraestructura/adaptadores/output/postgressql/JugadorRepositoryImpl";
import { CrearJugadorUseCase } from "./aplicacion/caso_de_uso/jugador/crearjugador/CrearJugadorUseCase";
import { JugadorController } from "./infraestructura/adaptadores/input/http/JugadorController";
import { CrearJugadorRequest } from "./aplicacion/dto/CrearJugadorRequest";
import { ListarJugadoresUseCase } from "./aplicacion/caso_de_uso/jugador/listarjugadores/ListarJugadoresUseCase"; 
import { ListarVideojuegosUseCase } from "./aplicacion/caso_de_uso/jugador/listar_videojuego/ListarVideojuegoUseCase";
const jugadorRepository = new JugadorRepositoryImpl(db);
const crearJugadorUseCase = new CrearJugadorUseCase(jugadorRepository);
const listarJugadoresUseCase = new ListarJugadoresUseCase(jugadorRepository); 
const listarVideojuegosUseCase = new ListarVideojuegosUseCase(jugadorRepository); 
const jugadorController = new JugadorController(crearJugadorUseCase, listarJugadoresUseCase, listarVideojuegosUseCase);

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    try {
      const url = new URL(req.url);
      const pathname = url.pathname;
      const method = req.method;

      console.log(`${method} ${pathname}`);

      if (pathname === "/jugadores") {
        if (method === "GET") {
          const jugadores = await jugadorController.listarJugadores();
          return json(jugadores);
        }

        if (method === "POST") {
          const body = await req.json();
          const nickname = body.nickname?.trim();
          const email = body.email?.trim();
          
          const videojuegoId = body.videojuegoId !== undefined && body.videojuegoId !== null 
            ? Number(body.videojuegoId) 
            : null;

          if (!nickname || !email) {
            return json({ error: "nickname y email son obligatorios" }, 400);
          }

          if (videojuegoId !== null && isNaN(videojuegoId)) {
            return json({ error: "videojuegoId inválido" }, 400);
          }

          const dto = new CrearJugadorRequest(nickname, email, videojuegoId);
          const resultado = await jugadorController.crearJugador(dto);

          if (resultado && 'error' in (resultado as any)) {
          return json(resultado, 400);
}

return json(resultado, 201);
        }
      }

      if (pathname === "/videojuegos") {
        if (method === "GET") {
          const videojuegos = await jugadorController.listarVideojuegos();
          return json(videojuegos);
        }
        return json({ error: "Método no permitido" }, 405);
      }

      return json({ error: "Ruta no encontrada" }, 404);
    } catch (error) {
      return json({ error: "Internal Server Error" }, 500);
    }
  },
});

console.log(`🚀 Servidor corriendo en http://localhost:${server.port}`);