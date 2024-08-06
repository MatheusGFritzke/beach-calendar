import { openDb } from '../../lib/db.mjs';

export default async function handler(req, res) {
  const db = await openDb();
  
  switch (req.method) {
    case 'GET':
      const users = await db.all('SELECT * FROM users');
      res.json(users);
      break;
    case 'POST':
      const { name, email } = req.body;
      await db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
      res.status(201).json({ name, email });
      break;
    default:
      res.status(405).end(); // Método não permitido
      break;
  }
}