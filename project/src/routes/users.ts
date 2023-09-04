import express from 'express';
import userController from '../controllers/user.controller';
import authController from '../controllers/authentication.controller';


const router = express.Router();

router.post('/auth/', authController.login)
router.get('/users/', userController.index);
router.get('/users/:id', (req, res) => {
    res.json({
        message: {
            message: 'This is a user'
        }
    });
});
router.post('/users/', userController.store);
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