import mongo from './mongo';
import mysql from './mysql';
import pg from './pg';

const databaseConnection = process.env.DB_CONNECTION || mongo;

const connectDB = () => {
    if (databaseConnection === 'mongo') mongo();
    if (databaseConnection === 'mysql') mysql();
    if (databaseConnection === 'pg') pg();
};

export default connectDB;