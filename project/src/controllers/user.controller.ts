import User from '../models/user.model';
import { Request, Response } from 'express';
import CatchAsync from '../utils/catchAsync';
import jwt from 'jsonwebtoken';

const store = CatchAsync(async (req: Request, res: Response) => {

    const authHeader = req.headers['authorization'] || '';
    const token = authHeader.replace('Bearer ', '');
    const verified = jwt.verify(token, process.env.JWT_KEY || '');

    await User.create({ email: req.body.email, password: req.body.password });

    const users = await User.find();
    res.json(users);
});

const index = async (req: Request, res: Response) => {

    console.log(req.body);

    // const verified = jwt.verify(token, jwtSecretKey);

    const users = await User.find();
    res.json(users);
};

export default {
    store,
    index
}