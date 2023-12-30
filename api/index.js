import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import userRouter from "./routes/user.route.js";
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log(`server is running on port 5000...`);
});

app.use("/api/user", userRouter);
