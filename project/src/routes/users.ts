import express from 'express';
import { login, index, store, show, update } from '../controllers/index'
import authenticationMiddleware from '../middleware/authMiddleware';
import { rateLimiter, RateLimiterRule } from '../middleware/rateLimiter';

const router = express.Router();

const AUTH_RATE_LIMITER_RULE: RateLimiterRule = {
    endpoint: 'auth',
    rate_limit: {
        time: 60,
        limit: 3,
    }
}

router.post('/auth/', rateLimiter(AUTH_RATE_LIMITER_RULE), login)

router.get('/users/', authenticationMiddleware, index);
router.post('/users/', authenticationMiddleware, store);
router.get('/users/:id', authenticationMiddleware, show);
router.put('/users/:id', authenticationMiddleware, update);

export default router;