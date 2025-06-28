import express from "express";
import router from "./router/index.js";
import connectMongoDb from "./connect.js";
import cors from "cors";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 3000;
connectMongoDb(process.env.DATABASE_URI);

app.use(
  cors({origin: "https://frontend-authentication-ce9p.onrender.com"})
);
app.use(express.json());
app.use("/v1", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
