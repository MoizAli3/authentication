import express from "express";

const signUpRoute = express.Router();

signUpRoute.get("/", (req, res) => {
  res.send("Hello from the signup");
});

export default signUpRoute;