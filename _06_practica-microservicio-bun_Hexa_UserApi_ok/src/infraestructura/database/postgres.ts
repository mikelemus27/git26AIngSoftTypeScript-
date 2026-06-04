// ==================================================
// DATABASE CONNECTION
// ==================================================

import { Pool } from "pg";

export const db = new Pool({
  host: process.env.DB_HOST || "postgres",
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "admin123",
  database: process.env.DB_NAME || "escuela"
});