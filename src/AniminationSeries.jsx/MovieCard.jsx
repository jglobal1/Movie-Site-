function MovieCard({ title, imageUrl }) {
    return (
        <div className="movie-card rounded-lg shadow-md" onClick={()=> fetchMovieDetails(movie.id)}>
            <img src={imageUrl} alt={title} className="rounded-lg w-[110px]" />
            <h3 className="text-white text-center mt-2">{title}</h3>
        </div>
    );
}

export default MovieCard;
