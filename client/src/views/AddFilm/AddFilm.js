import React, { useState } from 'react'
import './AddFilm.css';

function AddFilm () {
    const [film, setFilm] = useState({
        title:"",
        shortDescription:"",
        director:"",
        poster:"",
        releaseYear:"",
        category:"",
        language:"",
        writer:"",
        rating:"",
        review: "",
    });

  return (
    <div>
        <h1 className='heading'>Add Film</h1>

        <div className='add-film-form'>

            <div className='input-container'>
                <label htmlFor='title' className='input-label'>Title</label>
                <input type='text' id='title' className='input-element' />
            </div>

        </div>
    </div>
  )
}

export default AddFilm;