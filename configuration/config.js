const { config } = require('dotenv');
config();
const configuration = {
    PORT: process.env.PORT || 3000,
    DB_USER: process.env.DB_USER,
    DB_PWD: process.env.DB_PWD,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    CONNECTION: process.env.CONNECTION,
}

module.exports = configuration;