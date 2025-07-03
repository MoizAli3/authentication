import express from "express";
import { handleforgetPass } from "../../controller/user/forgetPass.js";


const forgetPassRoute = express.Router();

forgetPassRoute.post("/", handleforgetPass);

export default forgetPassRoute;
