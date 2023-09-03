import User from '../models/user.model';
import { Request, Response } from 'express';
import CatchAsync from '../utils/catchAsync';


const store = CatchAsync(async (req: Request, res: Response) => {
    await User.create({ email: "email", password: "password" });

    const users = await User.find();
    res.json(users);
});

export default {
    store
}