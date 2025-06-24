import express from "express";
import { handleCreateUser } from "../../controller/user/createUser.js";

const signUpRoute = express.Router();

signUpRoute.post("/", handleCreateUser);

export default signUpRoute;