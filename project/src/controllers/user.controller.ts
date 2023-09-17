import User from '../models/user.model';
import { Request, Response, NextFunction } from 'express';

export const store = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({ email: email, password: password });
        res.json(user);
    } catch (err) {
        next(err);
        res.status(400).json({ message: "Unable to create user" });
    }
}

export const index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const q = req.query.q;
        const query = {
            email: new RegExp(`${q}`)
        };

        const users = await User.find(query);

        console.log(query);
        res.json(users);
    } catch (err) {
        next(err);
        res.status(400).json({ message: "Something Went Wrong!" });
    }
}

export const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({
            _id: id
        });
        if (!user) {
            res.status(404).json({ message: "User not found!" });
        }
        res.json(user);
    } catch (err) {
        next(err);
        res.status(400).json({ message: "Something Went Wrong!" });
    }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;

        const { email, password } = req.body;

        const user = await User.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: {
                    email: email,
                    password: password
                }
            },
            { new: true }
        );

        if (!user) {
            res.status(404).json({ message: "User not found!" });
        }

        res.json(user);
    } catch (err) {
        next(err);
        res.status(400).json({ message: "Unable to update user!" });
    }
}
