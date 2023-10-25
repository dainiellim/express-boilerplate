import { NextFunction, Request, Response } from "express";
import { redisClient } from './../../database/redis';

interface RateLimiterRule {
    endpoint: string;
    rate_limit: {
        time: number,
        limit: number,
    }
}

const rateLimiter = (rule: RateLimiterRule) => {
    const { endpoint, rate_limit } = rule;

    return async (req: Request, res: Response, next: NextFunction) => {
        const ipAddress = req.ip;
        const redisId = `${endpoint}/${ipAddress}`;

        const requests = await redisClient?.incr(redisId) || 0;

        if (requests === 1) {
            await redisClient?.expire(redisId, rate_limit.time);
        }

        if (requests > rate_limit.limit) {
            return res.status(429).send({
                message: 'Too much Request!',
            })
        }
        next();
    }
}

export { rateLimiter, RateLimiterRule };
