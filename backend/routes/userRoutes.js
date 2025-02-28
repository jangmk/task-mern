import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

router.get("/current", protect, getCurrentUser);
router.post("/", registerUser);
router.post("/login", loginUser);

export default router;
