import TicketModel from "./tickets-model.js";

export const createTicket = async (ticket) => await TicketModel.create(ticket);

export const findAllTickets = async () => await TicketModel.find();

export const findTicketById = async (ticketId) => await TicketModel.findById(ticketId);

export const findTicketsByEventId = async (eventId) => await TicketModel.find({eventId: eventId});

export const findTicketsByUserId = async (userId) => await TicketModel.find({userId: userId});

export const updateTicket = async (ticketId, ticket) => await TicketModel.updateOne({_id: ticketId}, {$set: ticket});

export const deleteTicket = async (ticketId) => await TicketModel.deleteOne({_id: ticketId});