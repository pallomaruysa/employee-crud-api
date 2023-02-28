/**
 * file: config/database.js
 * description: file responsiible for 'connectionStrings' (Cosmos DB & PostgreSQL)
 * date: 02/25/2023
 * author: Palloma Ruysa
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// => Conexão com a Base de Dados:
const pool = new Pool ({
  connectionString: process.env.DATABASE_URL
});

// on(event: 'connect' | 'acquire' | 'remove', listener: (client: PoolClient) => void): this;

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!')
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};