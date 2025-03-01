import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("이름 이메일 암호 다 써 주삼");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("이미 있는데용");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateJWTtoken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("엉터리 유저 데이터");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log("체에롱: ",user);

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateJWTtoken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("엉터리");
  }
});

const getCurrentUser = asyncHandler(async (req, res) => {
  //  const { _id, name, email } = await User.findById(req.user.id);
  //  이미 담았잖아~~ 바봉
  const { _id, name, email } = req.user;
  res.status(200).json({ id: _id, name, email });
});

const generateJWTtoken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "5d" });

export { registerUser, loginUser, getCurrentUser };
