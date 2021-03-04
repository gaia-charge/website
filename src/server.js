require("dotenv").config();

import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";
import { i18nMiddleware } from "./services/i18n.js";

const { PORT, NODE_ENV, ACKEE_SERVER, ACKEE_DOMAIN_ID } = process.env;
const dev = NODE_ENV === "development";

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    i18nMiddleware(),
    sapper.middleware({
      session: () => ({
        ACKEE_SERVER,
        ACKEE_DOMAIN_ID,
      }),
    })
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
