import React from "react";
import "./FilmCard.css";
import imgDirector from "../../assets/icons/director.png";
import imgReleaseYear from "../../assets/icons/year.png";
import imgRating from "../../assets/icons/star.png";
import imgCategory from "../../assets/icons/categories.png";
import imgLanguage from "../../assets/icons/language.png";
import imgWriter from "../../assets/icons/writer.png";
import imgReview from "../../assets/icons/review.png";
import Button from "../Button/Button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function FilmCard({
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
  const navigate = useNavigate();

  const deleteFilm = async () => {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/films/${_id}`
    );

    toast.success(response.data.message);
    window.location.reload();
  };

  return (
    <div className="film-card">
      <div>
        <img src={poster} alt={title} className="film-card-poster" />
      </div>

      <div className="film-card-info">
        <h1>{title}</h1>
        <p>{shortDescription}</p>

        <div className="film-card-info-details">
          <span className="director">
            <img src={imgDirector} className="film-info-icon" alt="Director Icon"/>
            {director}
          </span>

          <span className="release-year">
            <img src={imgReleaseYear} className="film-info-icon" alt="Release Year Icon"/>
            {releaseYear}
          </span>
        </div>

        <div className="film-card-info-details">
          <span className="director">
            <img src={imgLanguage} className="film-info-icon" alt="Language Icon"/>
            {language}
          </span>

          <span className="release-year">
            <img src={imgCategory} className="film-info-icon" alt="Category Icon"/>
            {category}
          </span>

          <span className="director">
            <img src={imgWriter} className="film-info-icon" alt="Writer Icon"/>
            {writer}
          </span>
        </div>

        <span className="film-card-description">
          <img src={imgReview} className="film-info-icon" alt="Review Icon"/>
          {review}
        </span>

        <div className="film-rating">
          <img src={imgRating} className="film-info-icon" alt="Rating Icon"/>
          {rating}
        </div>
      </div>

      <div className="film-card-delete">
        <Button
          title={"Edit"}
          onClick={() => {
            navigate(`/film/edit/${_id}`);
          }}
        />
        <Button title={"Delete"} onClick={() => deleteFilm()} />
      </div>
      <Toaster />
    </div>
  );
}

export default FilmCard;
