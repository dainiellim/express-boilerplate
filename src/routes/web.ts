import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, this is a simple Express.js server!');
});

// Export the router
export default router;