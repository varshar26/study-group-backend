import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password_hash: String,
}, { timestamps: true });

export default mongoose.model("User", userSchema);
