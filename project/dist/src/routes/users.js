"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = express_1.default.Router();
router.get('/users/', user_controller_1.default.store);
router.get('/users/:id', (req, res) => {
    res.json({
        message: {
            message: 'This is a user'
        }
    });
});
router.post('/users/', (req, res) => {
    res.json({
        message: {
            message: 'This user is created'
        }
    });
});
router.put('/users/:id', (req, res) => {
    res.json({
        message: {
            message: 'This user is updated'
        }
    });
});
router.delete('/users/:id', (req, res) => {
    res.json({
        message: {
            message: 'This user is deleted'
        }
    });
});
exports.default = router;
