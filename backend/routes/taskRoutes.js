import express from "express";
import {
  addTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/taskController.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", protect, getTasks);

router.post("/", protect, addTask);

router.put("/:id", protect, updateTask);

router.delete("/:id", protect, deleteTask);

export default router;
