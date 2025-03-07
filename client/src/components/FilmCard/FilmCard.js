import React from 'react';
import './FilmCard.css';
import imgDirector from '../../assets/icons/director.png';
import imgReleaseYear from '../../assets/icons/year.png';
import imgRating from '../../assets/icons/star.png';
import imgCategory from '../../assets/icons/categories.png';
import imgLanguage from '../../assets/icons/language.png';
import imgWriter from '../../assets/icons/writer.png';
import imgReview from '../../assets/icons/review.png';

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
      <div>
        <img src={poster} alt={title} className='film-card-poster' />
      </div>
      
      <div className='film-card-info'>
        <h1>{title}</h1>
        <p>{shortDescription}</p>

        <div className='film-card-info-details'>
          <span className='director'>
            <img src={imgDirector} className='film-info-icon' />
            {director}
          </span>

          <span className='release-year'>
            <img src={imgReleaseYear} className='film-info-icon' />
            {releaseYear}
          </span>
        </div>

        <div className='film-card-info-details'>
          <span className='director'>
            <img src={imgLanguage} className='film-info-icon' />
            {language}
          </span>

          <span className='release-year'>
            <img src={imgCategory} className='film-info-icon' />
            {category}
          </span>

          <span className='director'>
            <img src={imgWriter} className='film-info-icon' />
            {writer}
          </span>
        </div>

        <span className='film-card-description'>
            <img src={imgReview} className='film-info-icon' />
            {review}
        </span>

        <div className='film-rating'>
          <img src={imgRating} className='film-info-icon' />
          {rating}
        </div>
      </div>
        
    </div>
  )
}

export default FilmCard;