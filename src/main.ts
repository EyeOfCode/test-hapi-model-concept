"use strict";

import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
import ConnectDB from "./db";
import Routes from "./routes";
import * as dotenv from "dotenv";
dotenv.config();

export let server: Server;

export const init = async (): Promise<Server> => {
  server = Hapi.server({
    port: process.env.PORT || 8000,
    host: "0.0.0.0",
  });

  await ConnectDB();
  await Routes(server);
  return server;
};

export const start = async (): Promise<void> => {
  console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
  return server.start();
};

process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection");
  console.error(err);
  process.exit(1);
});
init().then(() => start());
