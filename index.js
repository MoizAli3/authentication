import express from "express";
import router from "./router/index.js";
import connectMongoDb from "./connect.js";
import "dotenv/config";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
connectMongoDb(process.env.DATABASE_URI);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/v1", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
