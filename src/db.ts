import sqlite3 from "better-sqlite3";

const db = sqlite3(process.env.DB_PATH || "database.db");

export default db;
