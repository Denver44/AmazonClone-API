import express from "express";
const router = express.Router();

import { getInfo, creatPayment } from "../controller/payment.js";

router.get("/", getInfo);
router.post("/create", creatPayment);

export default router;
