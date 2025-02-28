import asyncHandler from "express-async-handler";
import Task from "../models/taskModel.js";
import User from "../models/userModel.js";

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.status(200).json(tasks);
});

const addTask = asyncHandler(async (req, res) => {
  console.log("체로롱: ", req.body);
  console.log("체로롱: ", req.user);

  if (!req.body.text) {
    //res.status(400).json({ message: "Task를 넣으시옹" });
    res.status(400);
    throw new Error("Task 값을 주삼");
  }
  const task = await Task.create({ text: req.body.text, user: req.user.id });
  res.status(200).json(task);
});

const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("그런 Task 없엉");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("그런 사용자 없는뎅...");
  }

  if (task.user.toString() !== user.id) {
    res.status(401);
    throw new Error("사용자가 다른뎅 넌 누구징?");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTask);
});

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("그런 Task 없엉");
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("그런 사용자 없어용");
  }

  if (task.user.toString() !== user.id) {
    res.status(401);
    throw new Error("다른 사용잔뎅 넌 누구징?");
  }

  await Task.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

export { getTasks, addTask, updateTask, deleteTask };
