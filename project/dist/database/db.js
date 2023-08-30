"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_1 = __importDefault(require("./mongo"));
const mysql_1 = __importDefault(require("./mysql"));
const pg_1 = __importDefault(require("./pg"));
const databaseConnection = process.env.DB_CONNECTION || mongo_1.default;
const connectDB = () => {
    if (databaseConnection === 'mongo')
        (0, mongo_1.default)();
    if (databaseConnection === 'mysql')
        (0, mysql_1.default)();
    if (databaseConnection === 'pg')
        (0, pg_1.default)();
};
exports.default = connectDB;
