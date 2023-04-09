import mongoose from "mongoose";
import EventSchema from "./events-schema.js";
const EventModel = mongoose.model("EventModel", EventSchema);
export default EventModel;