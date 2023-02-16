import React from "react";

import MovieCard from "../movieCard/MovieCard";

const MovieList = ({moviesData}) => {
    
    return <div className="list">
        { moviesData.map((el)=>(
            <div key={el.id}>
            <MovieCard movie={el}/>
      </div> ))}
    </div>
    }
    
    export default MovieList;