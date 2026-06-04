import { Pool } from "pg";

export const db = new Pool({
  host: "localhost",
  user: "admin",
  password: "admin123",
  database: "escuela",
  port: 5433,
});

// Este console.log nos chismeará si se conectó bien al arrancar
db.connect()
  .then(() => console.log("✅ Conectado exitosamente a la base de datos: escuela"))
  .catch((err) => console.error("❌ Error de conexión a la BD:", err.message));