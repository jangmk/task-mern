import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "이름 필요해요"],
    },
    email: {
      type: String,
      required: [true, "이메일 필요해요"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "암호 필요해요"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
