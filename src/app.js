import express from "express";
import { env } from "./config/index.js";
import { connectConsumer } from "./consumers/consumer.js";
import { startConsumer } from "./consumers/startConsumer.js";

const app = express();

connectConsumer()
  .then(() => {
    startConsumer()

    app.listen(env.PORT, () => {
      console.log(`Server is running on port: ${env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("kafka connnection failed: ", err);
  });
