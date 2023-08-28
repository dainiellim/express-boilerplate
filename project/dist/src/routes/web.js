"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./users"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('Hello, this is a simple Express.js server!');
});
router.use('/api/v1', [
    users_1.default
]);
// Export the router
exports.default = router;
