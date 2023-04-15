import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import session from 'express-session';



import HelloController from "./controllers/hello-controller.js";
import EventsController from './controllers/events/events-controller.js';
import UsersController from './controllers/users/users-controller.js';
import ReviewsController from './controllers/reviews/reviews-controller.js';




const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;


const app = express();

app.use(session({
    secret: "asdfasdfasdfasdf",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // set to true if your using https
}));
app.use(cors(
    {
        origin: "http://localhost:3000", //change to process.env.CLIENT_URL
        credentials: true
    }
));


app.use(express.json());
/*
mongoose.connect(CONNECTION_STRING);
*/

mongoose.connect('mongodb://127.0.0.1:27017/TicketReselling');

HelloController(app);
EventsController(app);
UsersController(app);
ReviewsController(app);


app.listen(process.env.PORT || 4000);
