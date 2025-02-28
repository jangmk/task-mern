import mongoose from "mongoose";
const taskSchema = mongoose.Schema(
  {
    text: { type: String, required: [true, "글을 입력해 주삼"] },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);
