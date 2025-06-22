import express from "express";

const loginRoute = express.Router();

loginRoute.get("/", (req, res) => {
  res.send("Hello from the login");
});

export default loginRoute;