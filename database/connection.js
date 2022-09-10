const sql = require('mssql');
const config = require('../configuration/config');

const sqlConfig = {
    user: config.DB_USER,
    password: config.DB_PWD,
    database: config.DB_NAME,
    server: config.DB_HOST,
    options: {
      trustServerCertificate: true, // Debe ser true para ambiente local
      //instanceName: 'SQLEXPRESS', // Solo necesario si la instancia tiene nombre, debe estar corriendo SQL Browser
    },
  };

async function getConnection(){
  const pool = await sql.connect(sqlConfig);
  return pool;
}

module.exports = {
  getConnection
}