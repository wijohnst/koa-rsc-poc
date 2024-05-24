import Router from "@koa/router";

const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "Hello World!!!";
  return ctx.body;
});

export { router };
