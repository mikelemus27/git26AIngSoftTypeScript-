
import { Pool } from "pg";

export const db = new Pool({
  user: process.env.DB_USER || "admin",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "escuela",
  password: process.env.DB_PASSWORD || "admin123",
  port: Number(process.env.DB_PORT) || 5432,
});

db.connect()
  .then(() => {
    console.log("=========================================================");
    console.log("💾 [PostgreSQL] ¡Conexión exitosa a la base de datos!");
    console.log(`🏠 Host: ${process.env.DB_HOST || "localhost"} | BD: ${process.env.DB_NAME || "escuela"}`);
    console.log("=========================================================");
  })
  .catch((err) => {
    console.error("=========================================================");
    console.error("❌ [PostgreSQL] Error crítico al conectar a la base de datos:");
    console.error(err.message);
    console.error("=========================================================");
  });