import User from '../models/user.model';
import { Request, Response, NextFunction } from 'express';
import CatchAsync from '../utils/catchAsync';

const store = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.create({ email: req.body.email, password: req.body.password });
        res.json(user);
    } catch (Error) {
        next(Error);
        res.status(400).json({ message: "Unable to create user" });
    }
};

const index = async (req: Request, res: Response) => {

    const q = req.query.q;
    const query = {
        email: new RegExp(`${q}`)
    };

    const users = await User.find(query);

    console.log(query);
    res.json(users);
};

const show = async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = await User.findOne({
        _id: id
    });
    if (!user) {
        res.status(404).json({ message: "User not found!" });
    }
    res.json(user);
};

export default {
    store,
    index,
    show
}