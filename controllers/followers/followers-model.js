import mongoose from "mongoose";
import followersSchema from "./followers-schema.js";

const FollowersModel = mongoose.model("FollowersModel", followersSchema);

export default FollowersModel;