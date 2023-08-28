import express from 'express';
const router = express.Router();

router.get('/users/', (req, res) => {
    res.json({
        message: {
            message: 'This is user list'
        }
    });
});
router.get('/users/:id', (req, res) => {
    res.json({
        message: {
            message: 'This is a user'
        }
    });
});
router.post('/users/', (req, res) => {
    res.json({
        message: {
            message: 'This user is created'
        }
    });
});
router.put('/users/:id', (req, res) => {
    res.json({
        message: {
            message: 'This user is updated'
        }
    });
});

router.delete('/users/:id', (req, res) => {
    res.json({
        message: {
            message: 'This user is deleted'
        }
    });
});

// Export the router
export default router;