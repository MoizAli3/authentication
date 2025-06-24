import express from "express";
import { handleGetUsers } from "../../controller/user/loginUser.js";

const loginRoute = express.Router();

loginRoute.get("/", handleGetUsers);
export default loginRoute;
