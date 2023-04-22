import mongoose from "mongoose";

const Schema = mongoose.Schema({
    followerUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    followingUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, {collection: "followers"});

export default Schema;

