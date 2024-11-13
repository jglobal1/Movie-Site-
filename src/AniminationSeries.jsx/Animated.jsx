import React, { useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight, HiHeart } from 'react-icons/hi';

const Animated = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  
  
  // Fetch random movies initially
  const getRandomMovies = async () => {
    const randomQuery = 'action';
    const url = `http://www.omdbapi.com/?s=${randomQuery}&apikey=60c3d1c`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  // Fetch movies based on the search query
  const getMovieRequest = async (query) => {
    const url = `http://www.omdbapi.com/?s=${query}&apikey=60c3d1c`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getRandomMovies();
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    if (searchValue) {
      getMovieRequest(searchValue);
    } else {
      getRandomMovies();
    }
  }, [searchValue]);

  const scrollMovies = (direction) => {
    const container = document.getElementById('movie-container');
    const scrollAmount = direction === 'left' ? -200 : 200;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Function to toggle a movie as favorite
  const toggleFavorite = (movie) => {
    let updatedFavorites;
    if (favorites.some(fav => fav.imdbID === movie.imdbID)) {
      // Remove from favorites if already added
      updatedFavorites = favorites.filter(fav => fav.imdbID !== movie.imdbID);
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, movie];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div id="movie-section" className=" px-5 md:px-16 py-8 relative">
      <h2 className="text-white text-2xl md:text-4xl font-semibold mb-4">
        Find Your Favourite Movies (Old and Current)
      </h2>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchValue}
          onChange={handleSearchChange}
          className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-300 focus:outline-none"
        />
      </div>

     {/* Scroll Buttons */}
      <button
        onClick={() => scrollMovies('left')}
        className="hidden md:flex text-white text-[24px] absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer p-2 rounded-full bg-gray-800 hover:bg-gray-600 focus:outline-none shadow-md transition-all"
      >
        <HiChevronLeft />
      </button>
      <button
        onClick={() => scrollMovies('right')}
        className="hidden md:flex text-white text-[24px] absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer p-2 rounded-full bg-gray-800 hover:bg-gray-600 focus:outline-none shadow-md transition-all"
      >
        <HiChevronRight />
      </button>


      {/* Movie List */}
      <div id="movie-container" className="flex overflow-x-auto gap-6 scrollbar-none">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="flex-shrink-0 w-full sm:w-[350px] md:w-[400px] lg:w-[450px] bg-gray-800 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {/* Display movie poster */}
              {movie.Poster !== "N/A" ? (
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-72 object-cover rounded-md mb-4"
                />
              ) : (
                <div className="w-full h-72 bg-gray-700 flex items-center justify-center text-white rounded-md mb-4">
                  No Poster Available
                </div>
              )}
              <h3 className="text-white text-lg font-semibold">{movie.Title}</h3>
              <p className="text-gray-400">Year: {movie.Year}</p>

              {/* Add to Favorites Button (Heart Icon) */}
              <button
                className={`text-3xl mt-4 ${favorites.some(fav => fav.imdbID === movie.imdbID) ? 'text-red-500' : 'text-gray-500'}`}
                onClick={() => toggleFavorite(movie)}
              >
                <HiHeart />
              </button>
            </div>
          ))
        ) : (
          <p className="text-white">No movies found</p>
        )}
      </div>

      {/* Favorites Section */}
      <div className="mt-8">
        <h2 className="text-white text-2xl font-semibold mb-4">Your Favorite Movies</h2>
        <div className="flex flex-wrap gap-6">
          {favorites.length > 0 ? (
            favorites.map((fav) => (
              <div key={fav.imdbID} className="w-full sm:w-[300px] md:w-[350px] bg-gray-800 rounded-lg p-4">
                <img
                  src={fav.Poster}
                  alt={fav.Title}
                  className="w-full h-72 object-cover rounded-md mb-4"
                />
                <h3 className="text-white text-lg font-semibold">{fav.Title}</h3>
                <p className="text-gray-400">Year: {fav.Year}</p>
              </div>
            ))
          ) : (
            <p className="text-white">No favorite movies added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Animated;
