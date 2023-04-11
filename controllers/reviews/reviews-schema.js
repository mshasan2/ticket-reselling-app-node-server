import mongoose from "mongoose";
const Schema = mongoose.Schema({
    text : {type: String, required: true},
    user : {type: mongoose.Schema.Types.ObjectId, ref: 'events', required: true},
    event : {type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true}
}, {collection: 'reviews'})
export default Schema;
