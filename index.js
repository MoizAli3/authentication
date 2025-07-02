import express from "express";
import router from "./router/index.js";
import connectMongoDb from "./connect.js";
import cors from "cors";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 3000;
connectMongoDb(process.env.DATABASE_URI);

const allowedOrigins = process.env.CLIENT_URL;

app.use(
  cors({
    origin: "http://localhost:5173", // Specify the exact frontend origin
    credentials: true, // Allow credentials (cookies, etc.)
  })
);
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (
//         !origin ||
//         origin === "https://frontend-authentication-ce9p.onrender.com"
//       ) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS!"));
//       }
//     },
//     credentials: true,
//   })
// );

app.use(express.json());
app.use("/v1", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
