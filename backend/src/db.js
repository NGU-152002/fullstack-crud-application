import pg from "pg"
import env from "dotenv"

env.config();

const db = new pg.Client({
    user: 'pirate',
    host: '127.0.0.1',
    database: 'db',
    password: 12345,
    port: 5432,
  });
db.connect();

db.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
  });

export const query = (text, params) => db.query(text, params);