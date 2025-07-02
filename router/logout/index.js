import express from "express";
import { handleLogoutUsers } from "../../controller/user/logoutUser.js";

const logoutRoute = express.Router();

logoutRoute.post("/", handleLogoutUsers);


export default logoutRoute;
