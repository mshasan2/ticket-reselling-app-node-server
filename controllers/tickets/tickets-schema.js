import mongoose from "mongoose";
const Schema = mongoose.Schema(
    {
        eventId: {type: String, required: true},
        userId: {type: String, required: true},
        price: {type: Number, required: true},
        date: {type: Date, required: true},
        quantity: {type: Number, default: 1}

    }, {collection: 'tickets'}
)

export default Schema;