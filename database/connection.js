const sql = require('mssql');
const mysql = require('mysql');
const config = require('../configuration/config');
const controller = config.CONNECTION;

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

async function getConnection() {
  switch (controller) {
    case 'MYSQL':
      const connection = mysql.createConnection(sqlConfig);
      return connection;

    case 'SQL':
      const pool = await sql.connect(sqlConfig);
      return pool;
  }
}

async function createQuerySQL(query) {
  const connection = await getConnection();
  const response = await connection.request().query(query);
  return response.recordset;
}

async function createQueryMySQL(query) {
  const connection = await getConnection();

  return new Promise((resolve, reject) => {
    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      return error ? reject(error) : resolve(results);
    });
  })


}

module.exports = {
  getConnection,
  createQuerySQL,
  createQueryMySQL
}