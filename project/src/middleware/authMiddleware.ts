import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers['authorization'] || '';
        const token = authHeader.replace('Bearer ', '');
        const verified = jwt.verify(token, process.env.JWT_KEY || '');
        if (verified) {
            next();
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (Error) {
        next(Error);
        res.status(401).json({ message: 'Unauthorized' });
    }
};

export default authenticationMiddleware;