import React, { useState } from "react";
import "./AddFilm.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import axios from 'axios';
import toast from "react-hot-toast";

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

  const addFilm = async() => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/films`, {
        title: film.title,
        shortDescription: film.shortDescription,
        director: film.director,
        poster: film.poster,
        releaseYear: film.releaseYear,
        category: film.category,
        language: film.language,
        writer: film.writer,
        rating: film.rating,
        review: film.review,
    });

    toast.success(response.data.message);

    setFilm({
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
    })
  }

  return (
    <div>
      <h1 className="main-heading">Add Film</h1>
      <p className="sub-heading">"Expand the Collection – Add a New Film!"</p>

      <div className="add-film-form">
        <Input
          label="Title"
          value={film.title}
          setValue={(val) => {
            setFilm({ ...film, title: val });
          }}
          placeholder={"Enter the title of the film"}
        />

        <Input
          label="Short Description"
          value={film.shortDescription}
          setValue={(val) => {
            setFilm({ ...film, shortDescription: val });
          }}
          placeholder={"Enter a short description of the film"}
        />

        <Input
          label="Director"
          value={film.director}
          setValue={(val) => {
            setFilm({ ...film, director: val });
          }}
          placeholder={"Enter a director of the film"}
        />

        <Input
          label="Poster"
          value={film.poster}
          setValue={(val) => {
            setFilm({ ...film, poster: val });
          }}
          placeholder={"Enter the URL of the poster"}
        />

        <Input
          label="Release Year"
          value={film.releaseYear}
          setValue={(val) => {
            setFilm({ ...film, releaseYear: val });
          }}
          placeholder={"Enter the release year of the film"}
        />

        <Input
          label="Category"
          value={film.category}
          setValue={(val) => {
            setFilm({ ...film, category: val });
          }}
          placeholder={"Enter the category of the film"}
        />

        <Input
          label="Language"
          value={film.language}
          setValue={(val) => {
            setFilm({ ...film, language: val });
          }}
          placeholder={"Enter the language of the film"}
        />

        <Input
          label="Writer"
          value={film.writer}
          setValue={(val) => {
            setFilm({ ...film, writer: val });
          }}
          placeholder={"Enter the writer of the film"}
        />

        <Input
          label="Rating"
          value={film.rating}
          setValue={(val) => {
            setFilm({ ...film, rating: val });
          }}
          placeholder={"Enter the rating of the film"}
        />

        <Input
          label="Review"
          value={film.review}
          setValue={(val) => {
            setFilm({ ...film, review: val });
          }}
          placeholder={"Enter the review of the film"}
        />

        <Button title="Add Film" onClick={()=>{addFilm()}} variant="" />

        <Button title="Cancel" onClick={()=>{}} variant="" />
      
      </div>
    </div>
  );
}

export default AddFilm;
