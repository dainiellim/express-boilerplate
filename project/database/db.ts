import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUser = process.env.DB_USER;
const mongoPassword = process.env.DB_PASSWORD;
const mongoHost = process.env.DB_HOST;
const mongoDbName = process.env.DB_NAME;

const uri = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}/${mongoDbName}?retryWrites=true&w=majority`;

const connectDB = () => {
    mongoose.connect(uri)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
};

export default connectDB;