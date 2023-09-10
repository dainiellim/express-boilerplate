import express from 'express';
import { login, index, store, show, update } from '../controllers/index'
import authenticationMiddleware from '../middleware/authMiddleware';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


const router = express.Router();

router.post('/auth/', login)

router.get('/users/', authenticationMiddleware, index);
router.post('/users/', authenticationMiddleware, store);
router.get('/users/:id', authenticationMiddleware, show);
router.put('/users/:id', authenticationMiddleware, update);

export default router;