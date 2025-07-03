import express from "express";
import { handleSentVerifactionCode } from "../../controller/user/sentcode.js";
import handleSentCodeMiddleware from "../../middleware/checktoken.js";

const sendCodeRoute = express.Router();

sendCodeRoute.post("/", handleSentCodeMiddleware, handleSentVerifactionCode);


export default sendCodeRoute;
