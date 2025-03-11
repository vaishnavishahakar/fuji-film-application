import React, { useEffect, useState } from "react";
import "./EditFilm.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import toast, { Toaster } from "react-hot-toast";

function EditFilm() {
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

  const { id } = useParams();

//   const loadFilmDetails = async () => {
//     if (!id) return;
//     const response = await axios.get(
//       `${process.env.REACT_APP_API_URL}/films/${id}`
//     );
//      console.log(response.data.data);
//     setFilm(response.data.data);
//   };

//   useEffect(() => {
//     loadFilmDetails();
//   }, [loadFilmDetails]);

useEffect(() => {
    const loadFilmDetails = async () => {
        if (!id) return;
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/films/${id}`);
            console.log(response.data.data);
            setFilm(response.data.data);
        } catch (error) {
            console.error("Error fetching film details:", error);
        }
    };

    loadFilmDetails();
}, [id]);

  const updateFilm = async () => {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/films/${id}`,
      {
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
      }
    );

    toast.success(response.data.message);
  };

  return (
    <div>
      <h1>Edit Film</h1>
      <p>ID: {id}</p>

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

        <Button
          title="Update Film"
          onClick={() => {
            updateFilm();
          }}
          variant="primary"
        />

        <Button title="Cancel" onClick={() => {}} variant="secondary" />
      </div>
      <Toaster />
    </div>
  );
}

export default EditFilm;
