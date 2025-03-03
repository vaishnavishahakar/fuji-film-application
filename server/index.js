// Library imports
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

// Custom imports
import { getHome, getHealth, getNotFound } from './controllers/other.js';
import Film from "./models/Film.js";

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if(conn){
        console.log("Connected to MongoDB");
    }
};

app.get("/", getHome);
app.get("/health", getHealth);

// Film
app.post("/films", async(req, res) => {
const {
    title,
    shortDescription,
    director,
    poster,
    releaseYear,
    category,
    language,
    rating,
    writer,
    review
} = req.body;

const newFilm = new Film({
    title,
    shortDescription,
    director,
    poster,
    releaseYear,
    category,
    language,
    rating,
    writer,
    review
});

const savedFilm = await newFilm.save();

    return res.status(201).json({
        success: true,
        message: "Film created",
        data: savedFilm,
    });
});

app.get("/films", async(req, res) => {
    const films = await Film.find();
    return res.status(200).json({
        success: true,
        data: films,
        message: "All films fetched",
    });
});

app.get("*", getNotFound);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});