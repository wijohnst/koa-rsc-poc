"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const router_1 = __importDefault(require("@koa/router"));
const router = new router_1.default();
exports.router = router;
router.get("/", (ctx) => {
    ctx.body = "Hello World!!!";
    return ctx.body;
});
