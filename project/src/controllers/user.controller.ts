import User from '../models/user.model';
import { Request, Response, NextFunction } from 'express';
import CatchAsync from '../utils/catchAsync';

export const store = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.create({ email: req.body.email, password: req.body.password });
        res.json(user);
    } catch (Error) {
        next(Error);
        res.status(400).json({ message: "Unable to create user" });
    }
};

export const index = async (req: Request, res: Response) => {

    const q = req.query.q;
    const query = {
        email: new RegExp(`${q}`)
    };

    const users = await User.find(query);

    console.log(query);
    res.json(users);
};

export const show = async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = await User.findOne({
        _id: id
    });
    if (!user) {
        res.status(404).json({ message: "User not found!" });
    }
    res.json(user);
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        // let user = await User.updateOne({
        //     _id: id
        // });
        const user = await User.updateOne({
            _id: id
        },
            { $set: { email: req.body.email, password: req.body.password } }
        );

        if (!user) {
            res.status(404).json({ message: "User not found!" });
        }

        res.json(user);
    } catch (Error) {
        next(Error);
        res.status(400).json({ message: "Unable to update user!" });
    }
};
