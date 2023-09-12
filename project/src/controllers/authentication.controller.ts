import User from '../models/user.model';
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        const salt = await bcrypt.genSalt(10);
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                const privateKey: string = process.env.JWT_KEY || '';
                var token = jwt.sign({
                    foo: 'bar'
                }, privateKey, { algorithm: 'HS256' });
                return res.status(200).json({
                    message: "User Logged in Successfully",
                    token: token,
                });
            }
            return res.status(400).json({ message: "Invalid Credentials" });
        });
    } catch (err) {
        next(err);
        res.json(req.body);
        res.status(400).send("error");
    }
}