import mongoose from "mongoose";

const Schema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        event: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event",
        },
        review: {
            type: String,
            required: true,
        },
        liked: {
            type: Boolean,
            default: false,
        },
        likes: {
            type: Number,
            default: 0,
        },
        userHandle: {
            type: String,
            required: true,
        },
        avatar:{
            type:String,
            required: true
        }
    }, {collection: 'reviews'});

export default Schema;