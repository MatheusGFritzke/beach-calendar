import { openDb } from '../lib/db.mjs';

async function dropTable() {
  const db = await openDb();

  try {
    await db.exec('DROP TABLE IF EXISTS users');
    console.log('Tabela "users" excluída com sucesso');
  } catch (error) {
    console.error('Erro ao excluir a tabela:', error);
  } finally {
    await db.close();
  }
}

dropTable().catch((error) => {
  console.error('Erro ao executar o script:', error);
});
