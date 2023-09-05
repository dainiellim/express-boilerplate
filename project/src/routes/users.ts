import express from 'express';
import userController from '../controllers/user.controller';
import authController from '../controllers/authentication.controller';
import authenticationMiddleware from '../middleware/authMiddleware';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


const router = express.Router();



router.post('/auth/', authController.login)

router.get('/users/', authenticationMiddleware, userController.index);
router.post('/users/', authenticationMiddleware, userController.store);
router.get('/users/:id', authenticationMiddleware, userController.show);
// router.put('/users/:id', (req, res) => {
//     res.json({
//         message: {
//             message: 'This user is updated'
//         }
//     });
// });

// router.delete('/users/:id', (req, res) => {
//     res.json({
//         message: {
//             message: 'This user is deleted'
//         }
//     });
// });

export default router;