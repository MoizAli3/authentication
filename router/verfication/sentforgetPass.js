import express from "express";
import { handleSentOtpCodePass } from "../../controller/user/sentforgetpass.js";


const sentOtpPassRoute = express.Router();

sentOtpPassRoute.post("/", handleSentOtpCodePass);

export default sentOtpPassRoute;
