import Film from "../models/Film.js";

// const postFilm = async(req, res) => {
//     const {
//         title,
//         shortDescription,
//         director,
//         poster,
//         releaseYear,
//         category,
//         language,
//         rating,
//         writer,
//         review
//     } = req.body;

//     const newFilm = new Film({
//         title,
//         shortDescription,
//         director,
//         poster,
//         releaseYear,
//         category,
//         language,
//         rating,
//         writer,
//         review
//     });

//     const savedFilm = await newFilm.save();

//         return res.status(201).json({
//             success: true,
//             message: "Film created",
//             data: savedFilm,
//         });
//     };
const postFilm = async (req, res) => {
  try {
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
    } = req.body;

    // Ensure required fields exist
    if (!title || !director || !releaseYear) {
      return res.status(400).json({
        success: false,
        message: "Title, Director, and Release Year are required",
      });
    }

    const newFilm = new Film({
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
    });

    const savedFilm = await newFilm.save();

    return res.status(201).json({
      success: true,
      message: "Film created successfully",
      data: savedFilm,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const getFilm = async (req, res) => {
  try {
    const films = await Film.find().select("-__v -createdAt -updatedAt");

    return res.status(200).json({
      success: true,
      data: films,
      message: "All films fetched",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      data: null,
      message: e.message,
    });
  }
};

const getFilmById = async (req, res) => {
  const { id } = req.params;

  try {
    const film = await Film.findById(id).select("-__v");

    if (film) {
      return res.status(200).json({
        success: true,
        data: film,
        message: "Film fetched",
      });
    } else {
      return res.status(404).json({
        success: false,
        data: null,
        message: "Film not found",
      });
    }
  } catch (e) {
    return res.status(400).json({
      success: false,
      data: null,
      message: e.message,
    });
  }
};

const deleteFilmById = async (req, res) => {
  const { id } = req.params;

  try {
    const film = await Film.deleteOne({ _id: id });

    return res.status(200).json({
      success: true,
      data: film,
      message: "Film deleted",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      data: null,
      message: e.message,
    });
  }
};

const updateFilmById = async (req, res) => {
  const { id } = req.params;

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
  } = req.body;

  try{
  const updatedFilm = await Film.updateOne({ _id: id },
    {
      title: title,
      shortDescription: shortDescription,
      director: director,
      poster: poster,
      releaseYear: releaseYear,
      category: category,
      language: language,
      rating: rating,
      writer: writer,
      review: review,
    });

    return res.status(200).json({
        success: true,
        data: updatedFilm,
        message: "Film updated",
      });
    } catch(e) {
        return res.status(400).json({
          success: false,
          data: null,
          message: e.message,
        });
      }
};

const updateFilmRatingById = async (req, res) => {
    const { id } = req.params;
    const {rating} = req.body;

    try{
        const updatedFilm = await Film.updateOne({_id: id}, {rating: rating});
        
        return res.status(200).json({
            success: true,
            data: updatedFilm,
            message: "Film rating updated",
          });
        } catch(e) {
            return res.status(400).json({
              success: false,
              data: null,
              message: e.message,
            });
          }
};

export { postFilm, getFilm, getFilmById, deleteFilmById, updateFilmById, updateFilmRatingById };
