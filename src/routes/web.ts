import express from 'express';
import userRoutes from './users';
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello, this is a simple Express.js server!');
});

router.use('/api/v1', [
    userRoutes
]);

// Export the router
export default router;