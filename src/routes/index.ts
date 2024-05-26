import * as React from "react";
import Router from "@koa/router";
import fs from "fs";
import { renderToString } from "react-dom/server";

import App from "../client/App";

const router = new Router();

router.get("/", (ctx) => {
  const html = `
  <html>
    <head></head>
    <body>
       <div id="root">${renderToString(React.createElement(App))}</div> 
       <script src="/client.js"></script>
    </body>
  </html>
  `;

  ctx.body = html;
  return ctx.body;
});

router.get("/client.js", (ctx) => {
  ctx.type = "application/javascript";
  ctx.body = fs.readFileSync("../client/App.js", "utf-8");
  return ctx.body;
});

export { router };
