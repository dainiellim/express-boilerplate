import mongoose from 'mongoose';

const mongoUser = process.env.DB_USER;
const mongoPassword = process.env.DB_PASSWORD;
const mongoHost = process.env.DB_HOST;
const mongoDbName = process.env.DB_NAME;

const uri = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}/${mongoDbName}?retryWrites=true&w=majority`;

async function connectToDatabase() {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (err: any) {
        console.error('Error connecting to the database:');
        throw err;
    }
}

export default connectToDatabase;