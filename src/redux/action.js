import { ADD_MOVIE, DELETE_MOVIE} from "./actionType";



export const deleteMovie = (MovieID ) =>{
    return{
        type: DELETE_MOVIE,
        payload: MovieID,
    };
};

export const movieAdd = (newMovie) =>{
    return{
        type: ADD_MOVIE,
        payload: newMovie,
    };
};


