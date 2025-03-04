import React from 'react';
import './FilmCard.css';

function FilmCard ({
    title,
    shortDescription,
    director,
    poster,
    releaseYear,
    category,
    language,
    rating,
    writer,
    review,
    _id,
}) {
  return (
    <div className='film-card'>
        <h1>{title}</h1>
    </div>
  )
}

export default FilmCard;