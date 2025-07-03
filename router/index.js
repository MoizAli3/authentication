import express from "express";
import loginRoute from "./login/index.js";
import signUpRoute from "./signup/index.js";
import logoutRoute from "./logout/index.js";
import sendCodeRoute from "./verfication/sentcode.js";
import verifyCodeRoute from "./verfication/verfiycode.js";
import sentOtpPassRoute from "./verfication/sentforgetPass.js";
import forgetPassRoute from "./verfication/verifyforgetpass.js";

const router = express.Router();

router.use("/login", loginRoute);
router.use("/signup", signUpRoute);
router.use("/logout", logoutRoute);
router.use("/sentcode", sendCodeRoute);
router.use("/verifycode", verifyCodeRoute);
router.use("/sentcodeforgetpass", sentOtpPassRoute);
router.use("/verifycodeforgetpass", forgetPassRoute);





export default router;
