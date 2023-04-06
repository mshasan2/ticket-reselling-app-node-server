import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import HelloController from "./controllers/hello-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(CONNECTION_STRING);
HelloController(app);



app.listen(process.env.PORT || 4000);
