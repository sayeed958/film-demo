const path = require('path');
require('dotenv-safe').config({
    allowEmptyValues: true,
    path: path.join(__dirname, '../../.env'),
    sample: path.join(__dirname, '../../.env.example')
});

const postgre = {
    uri: process.env.NODE_ENV === 'test'
        ? process.env.PGSQL_URI_TESTS : process.env.PGSQL_URI,
    db: process.env.PGSQL_DB,
    host: process.env.PGSQL_HOST,
    port: +process.env.PGSQL_PORT,
    username: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASS
};
console.log(postgre);
module.exports = {
    development: {
        username: postgre.username,
        password: postgre.password,
        database: postgre.db,
        host: postgre.host,
        dialect: 'postgres',
        port: postgre.port
    },
    test: {
        username: postgre.username,
        password: postgre.password,
        database: postgre.db,
        host: postgre.host,
        dialect: 'postgres',
        port: postgre.port
    },
    production: {
        username: postgre.username,
        password: postgre.password,
        database: postgre.db,
        host: postgre.host,
        dialect: 'postgres',
        port: postgre.port
    }
};
