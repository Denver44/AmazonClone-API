import express from "express";
import payment from "./payment.js";

const routes = express.Router();

routes.get("/", (_, res) => res.send("Welcome To Amazon Clone Backend"));
routes.use("/payment", payment);

export default routes;
