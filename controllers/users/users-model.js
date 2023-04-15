import mongoose from "mongoose";
import userSchema from "./users-schema.js";
const UserModel = mongoose.model("users", userSchema);
export default UserModel;