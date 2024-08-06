import { openDb } from '../lib/db.mjs';

async function createTable() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL
    );
  `);
  console.log('Tabela "users" criada com sucesso');
}

createTable().catch((error) => {
  console.error('Erro ao criar a tabela:', error);
});