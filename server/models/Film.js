import {model, Schema} from 'mongoose';

const filmSchema = new Schema({
    title: String,
    director: String,
    poster: String,
    releaseYear: Number,
    category: String,
    language: String,
    rating: Number,
    cast: String,
    producer: String,
});

const Film = model('Film', filmSchema);

export default Film;