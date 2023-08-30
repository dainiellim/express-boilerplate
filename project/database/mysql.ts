import mysql from 'mysql2/promise'; // Import the mysql2/promise package

const mongoUser = process.env.DB_USER;
const mongoPassword = process.env.DB_PASSWORD;
const mongoHost = process.env.DB_HOST;
const mongoDbName = process.env.DB_NAME;

// Create a function to establish the database connection
async function connectToDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: 'your_host', // Replace with your host
            user: 'your_user', // Replace with your username
            password: 'your_password', // Replace with your password
            database: 'your_database', // Replace with your database name
        });

        console.log('Connected to the database');
        return connection;
    } catch (error: any) {
        console.error('Error connecting to the database:');
        throw error;
    }
}

export default connectToDatabase;
