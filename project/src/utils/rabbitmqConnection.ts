import amqplib, { Connection } from 'amqplib';

let connection: Connection | null = null;

export async function createConnection() {
    try {
        if (!connection) {
            //change server to your local connection
            const amqpServer = 'amqp://localhost:5672';
            connection = await amqplib.connect(amqpServer);
        }
        return connection;
    } catch (err) {
        throw err;
    }
}