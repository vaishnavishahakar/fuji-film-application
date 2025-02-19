// Library imports
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Custom imports
import { getHome, getHealth, getNotFound } from './controllers/other.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", getHome);
app.get("/health", getHealth);




app.get("*", getNotFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});