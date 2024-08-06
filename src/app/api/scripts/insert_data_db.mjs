import { openDb } from '../lib/db.mjs';

async function insertData() {
  const db = await openDb();

  const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' }
  ];

  for (const user of users) {
    await db.run('INSERT INTO users (name, email) VALUES (?, ?)', [user.name, user.email]);
  }

  console.log('Dados inseridos com sucesso');
}

insertData().catch((error) => {
  console.error('Erro ao inserir dados:', error);
});