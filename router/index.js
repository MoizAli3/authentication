import express from "express";
import loginRoute from "./login/index.js";
import signUpRoute from "./signup/index.js";

const router = express.Router();

router.use("/login", loginRoute);
router.use("/signup", signUpRoute);


export default router;
