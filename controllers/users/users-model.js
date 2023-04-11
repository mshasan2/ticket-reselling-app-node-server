import mongoose from "mongoose";
import userSchema from "./users-schema.js";
const UserModel = mongoose.model("User", userSchema);
export default UserModel;