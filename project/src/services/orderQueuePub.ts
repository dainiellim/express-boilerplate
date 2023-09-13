import { createConnection } from '../utils/rabbitmqConnection';

export async function orderQueuePub() {
    try {
        const connection = await createConnection();
        const channel = await connection.createChannel();

        await channel.assertQueue('order');

        // Define a message to publish
        const message = JSON.stringify({
            key: "1",
            value: 'Order data to be pushed to the queue',
            // customize your message
        });

        // Publish the message to the queue
        channel.sendToQueue('order', Buffer.from(message));

        console.log('Sent message:', message);
    } catch (err) {
        throw err;
    }
}