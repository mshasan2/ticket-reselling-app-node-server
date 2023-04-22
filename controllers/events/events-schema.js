import mongoose from 'mongoose';
const Schema = mongoose.Schema({
    Ename: {type: String, required: true, text: true},
    Edate: {type: String, required: true},
    Etime: {type: String, required: true},
    Elocation: {type: String, required: true},
    Edescription: {type: String, required: true},
    Eimage: {type: String},
    EshortDescription: {type: String, required: true},
    EticketQuantity: {type: Number, required: true},
    EticketPrice: {type: Number, required: true},
    Ecategory: {type: String, required: true},
    Eorganizer: {type: String, required: true}
}, {collection: 'events'})

export default Schema;