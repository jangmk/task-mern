import express from "express";
import dotenv from "dotenv";
import taskRouter from "./routes/taskRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import connectDB from "./connect/database.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();
const app = express();

/*
app.get("/api/tasks", (req, res) => {
  res.status(200).json({ message: "모든 리스트" });
});
*/

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks", taskRouter);
app.use("/api/users", userRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`E7E listening on ${port}`);
});
