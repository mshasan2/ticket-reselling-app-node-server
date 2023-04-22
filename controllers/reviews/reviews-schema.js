import mongoose from "mongoose";

const Schema = new mongoose.Schema(
    {
        eventId: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
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