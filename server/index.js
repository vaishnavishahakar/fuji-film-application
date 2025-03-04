// Library imports
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

// Custom imports
import { getHome, getHealth, getNotFound } from './controllers/other.js';
import { getFilm, postFilm, getFilmById, deleteFilmById, updateFilmById, updateFilmRatingById } from './controllers/film.js';

const app = express();
app.use(express.json());
app.use(cors());

// const connectDB = async () => {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     if(conn){
//         console.log("Connected to MongoDB");
//     }
// };
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); 
    }
};


app.get("/", getHome);
app.get("/health", getHealth);

// Film
app.post("/films", postFilm);
app.get("/films", getFilm);
app.get("/films/:id", getFilmById);
app.delete("/films/:id", deleteFilmById);
app.put("/films/:id", updateFilmById);
app.patch("/films/rating/:id", updateFilmRatingById);

app.get("*", getNotFound);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    // const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});