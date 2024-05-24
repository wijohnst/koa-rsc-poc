"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const routes_1 = require("./routes");
const app = new koa_1.default();
const PORT = 3000;
app.use(routes_1.router.routes());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
