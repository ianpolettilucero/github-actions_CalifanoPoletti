"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const HOST = '0.0.0.0';
const PORT = 3000;
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});
app.listen(PORT, HOST, () => {
    console.log(`Example app listening on port http://${HOST}:${PORT}`);
});

//niggers
