import mongoose from "mongoose";
const Schema = mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true},
    FirstName: {type: String, required: true},
    LastName: {type: String},
    Phone: {type: String},
    Location: {type: String},
    Image: {type: String},
    Role: {type: String, required: true}
}, {collection: 'users'})
export default Schema;
