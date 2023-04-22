import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import session from 'express-session';




import EventsController from './controllers/events/events-controller.js';
import UsersController from './controllers/users/users-controller.js';
import ReviewsController from './controllers/reviews/reviews-controller.js';
import TicketsController from './controllers/tickets/tickets-controller.js';
import FollowersController from './controllers/followers/followers-controller.js';


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb+srv://hasanmoh:VAqu5o1BVBQNrdwU@cluster0.oiswsac.mongodb.net/?retryWrites=true&w=majority';





/*
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
*/


const app = express();

app.use(session({
                    secret: "asdfasdfasdfasdf",
                    resave: false,
                    saveUninitialized: false,
                    cookie: {secure: false} // set to true if your using https
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

/*
mongoose.connect('mongodb://127.0.0.1:27017/TicketReselling');
*/


mongoose.connect(CONNECTION_STRING).then(() => console.log("Database Connected"));
EventsController(app);
UsersController(app);
ReviewsController(app);
TicketsController(app);
FollowersController(app);

app.listen(process.env.PORT || 4000);
