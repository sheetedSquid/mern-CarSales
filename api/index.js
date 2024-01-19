import express, { request, response } from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log(error);
    });

const app = express();

app.listen(4444, () => {
    console.log("Server is successfully running on port 4444");
})

app.use('/api/user', userRouter);