import EventModel from "./events-model.js";

export const createEvent = (event) => {
    return EventModel.create(event);
}

export const findAllEvents = () => {
    return EventModel.find();
}

export const findEventById = (eventId) => {
    return EventModel.findById(eventId);
}

export const updateEvent = (eventId, event) => {
    return EventModel.updateOne({_id: eventId}, {$set: event})
}

export const deleteEvent = (eventId) => {
    return EventModel.deleteOne({_id: eventId})
}
