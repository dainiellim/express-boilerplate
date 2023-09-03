"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const web_1 = __importDefault(require("./routes/web"));
const db_1 = __importDefault(require("../database/db"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use('/', web_1.default);
app.use(errorHandler_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
(0, db_1.default)();
exports.default = app;
