import express from "express";
import  handleVerifyCodeMiddleware  from "../../middleware/verifycode.js";
import { handleVerifyVerifactionCode } from "../../controller/user/verifycode.js";

const verifyCodeRoute = express.Router();

verifyCodeRoute.post(
  "/",
  handleVerifyCodeMiddleware,
  handleVerifyVerifactionCode
);

export default verifyCodeRoute;
