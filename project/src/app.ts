import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import webRoutes from './routes/web';
import dbConnect from '../database/db';


const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', webRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

dbConnect();

export default app;