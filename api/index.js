import express, { request, response } from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

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

app.use(express.json());

app.listen(4444, () => {
    console.log("Server is successfully running on port 4444");
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);