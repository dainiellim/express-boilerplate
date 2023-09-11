import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
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
            unique: true
        },
        role: {

        }
    },
    {
        timestamps: true
    }
);

schema.pre('save', async function (next) {
    console.log(123)
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


// userSchema.pre('updateOne', async function (next) {
//     const docToUpdate = await this.model.findOne(this.getUpdate())
//     return next()
// })


const UserModel = mongoose.model('User', schema);

export default UserModel;
