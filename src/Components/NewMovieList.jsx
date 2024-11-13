import React from 'react';

const NewMovieList = (props) => {
    return(
        <>
            {props.movies.map((movie,index)=>(
                <div>
                    <img src={movie.Poster} alt="movie" />
                </div>
            ))}
        </>
    )
}

export default NewMovieList