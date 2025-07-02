import express from "express";
import loginRoute from "./login/index.js";
import signUpRoute from "./signup/index.js";
import logoutRoute from "./logout/index.js";

const router = express.Router();

router.use("/login", loginRoute);
router.use("/signup", signUpRoute);
router.use("/logout", logoutRoute);


export default router;
