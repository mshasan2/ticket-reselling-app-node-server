import mongoose from "mongoose";
import ticketSchema from "./tickets-schema.js";
const TicketModel = mongoose.model("Ticket", ticketSchema);
export default TicketModel;