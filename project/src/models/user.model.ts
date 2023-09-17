import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { NextFunction } from 'express';

const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            unique: false
        },
        role: {

        }
    },
    {
        timestamps: true
    }
);

schema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        return next();
    } catch (error: any) {
        return next(error);
    }
});


schema.pre('findOneAndUpdate', async function (next) {
    try {
        const password = (this.getUpdate() as { $set: any })['$set'].password;
        if (!password) {
            return next();
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        (this.getUpdate() as { $set: any })['$set'].password = hashedPassword;
        return next();
    } catch (error: any) {
        return next(error);
    }
});



const UserModel = mongoose.model('User', schema);

export default UserModel;
