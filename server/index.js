// Library imports
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

// Custom imports
import { getHome, getHealth, getNotFound } from './controllers/other.js';

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if(conn){
        console.log("Connected to MongoDB");
    }
}

app.get("/", getHome);
app.get("/health", getHealth);




app.get("*", getNotFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});