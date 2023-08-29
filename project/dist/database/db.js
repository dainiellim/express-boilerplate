"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoUser = process.env.DB_USER;
const mongoPassword = process.env.DB_PASSWORD;
const mongoHost = process.env.DB_HOST;
const mongoDbName = process.env.DB_NAME;
const uri = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}/${mongoDbName}?retryWrites=true&w=majority`;
console.log(uri);
const connectDB = () => {
    mongoose_1.default.connect(uri)
        .then(() => {
        console.log('Connected to MongoDB');
    })
        .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
};
exports.default = connectDB;
