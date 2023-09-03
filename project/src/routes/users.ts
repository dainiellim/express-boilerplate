import express from 'express';
import User from '../models/user.model';
import catchAsync from '../utils/catchAsync';
import userController from '../controllers/user.controller'


const router = express.Router();

router.get('/users/', userController.store);
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

export default router;