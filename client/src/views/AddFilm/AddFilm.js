import React, { useState } from "react";
import "./AddFilm.css";
import Input from "../../components/Input/Input";

function AddFilm() {
  const [film, setFilm] = useState({
    title: "",
    shortDescription: "",
    director: "",
    poster: "",
    releaseYear: "",
    category: "",
    language: "",
    writer: "",
    rating: "",
    review: "",
  });

  return (
    <div>
      <h1>Add Film</h1>

      <div className="add-film-form">
        <Input
          label="Title"
          value={film.title}
          onChange={(val) => {
            setFilm({ ...film, title: val });
          }}
          placeholder={"Enter the title of the film"}
        />

        <Input
          label="Short Description"
          value={film.shortDescription}
          onChange={(val) => {
            setFilm({ ...film, shortDescription: val });
          }}
          placeholder={"Enter a short description of the film"}
        />

        <Input
          label="Director"
          value={film.director}
          onChange={(val) => {
            setFilm({ ...film, director: val });
          }}
          placeholder={"Enter a director of the film"}
        />

        <Input
          label="Poster"
          value={film.poster}
          onChange={(val) => {
            setFilm({ ...film, poster: val });
          }}
          placeholder={"Enter the URL of the poster"}
        />

        <Input
          label="Release Year"
          value={film.releaseYear}
          onChange={(val) => {
            setFilm({ ...film, releaseYear: val });
          }}
          placeholder={"Enter the release year of the film"}
        />

        <Input
          label="Category"
          value={film.category}
          onChange={(val) => {
            setFilm({ ...film, category: val });
          }}
          placeholder={"Enter the category of the film"}
        />

        <Input
          label="Language"
          value={film.language}
          onChange={(val) => {
            setFilm({ ...film, language: val });
          }}
          placeholder={"Enter the language of the film"}
        />

        <Input
          label="Writer"
          value={film.writer}
          onChange={(val) => {
            setFilm({ ...film, writer: val });
          }}
          placeholder={"Enter the writer of the film"}
        />

        <Input
          label="Rating"
          value={film.rating}
          onChange={(val) => {
            setFilm({ ...film, rating: val });
          }}
          placeholder={"Enter the rating of the film"}
        />

        <Input
          label="Review"
          value={film.review}
          onChange={(val) => {
            setFilm({ ...film, review: val });
          }}
          placeholder={"Enter the review of the film"}
        />
      </div>
    </div>
  );
}

export default AddFilm;
