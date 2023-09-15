import { Request, Response, NextFunction } from 'express';
import logger from './logger';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    logger.error('An error occurred:', err);
    next();
}

export default errorHandler