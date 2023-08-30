"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'your_user',
    password: 'your_password',
    host: 'your_host',
    port: 5432,
    database: 'your_database',
});
function connectToDatabase() {
    pool.on('connect', () => {
        console.log('Connected to the database');
    });
    pool.on('error', (err) => {
        console.error('Error connecting to the database:');
        throw err;
    });
    return pool;
}
exports.default = connectToDatabase;
