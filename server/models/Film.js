import {model, Schema} from 'mongoose';

const filmSchema = new Schema({
    title: String,
    shortDescription: String,
    director: Array,
    poster: String,
    releaseYear: Number,
    category: String,
    language: String,
    rating: Number,
    writer: Array,
    review: String,
},
{timestamps: true}
);

const Film = model('Film', filmSchema);

export default Film;