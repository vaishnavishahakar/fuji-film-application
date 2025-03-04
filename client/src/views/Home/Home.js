import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import toast, {Toaster} from "react-hot-toast";
import FilmCard from '../../components/FilmCard/FilmCard';

function Home () {
    const [films, setFilms] = useState([]);

    const loadFilms = async () => {
        try{
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/films`)
            setFilms(response.data.data);
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error?.response?.data?.message || error?.message)
        }
    }

    useEffect(() => {
        loadFilms();
    }, []);

  return (
    <div>
        <h1>Home</h1>
        {films.map((film, index) => {
            const {
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
            } = film;

            return (
                <FilmCard 
                    key={index}
                    _id={_id}
                    title={title}
                    shortDescription={shortDescription}
                    director={director}
                    poster={poster}
                    releaseYear={releaseYear}
                    category={category}
                    language={language}
                    rating={rating}
                    writer={writer}
                    review={review}
                />
            );
        })}
        <Toaster/>
    </div>
  );
}

export default Home;