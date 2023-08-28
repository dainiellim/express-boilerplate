import dotenv from 'dotenv';
import express from 'express';
import webRoutes from './routes/web';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000

app.use('/', webRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


export default app;