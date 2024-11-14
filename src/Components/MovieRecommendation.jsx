import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const MovieRecommendation = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const elementRef = useRef(null); // Set up the ref for the movie container

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const token = '2bbb014c61a2b44c237ad5e571bef752'; // Replace with your actual token

        // API URL for fetching popular movies
        const apiUrl = 'https://api.themoviedb.org/3/movie/popular';

        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('API Response:', response.data);

        setMovies(response.data.results);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data: ', err);
        setError('Failed to fetch movies');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Function to slide right
  const sliderRight = (element) => {
    const containerWidth = element.offsetWidth;
    const scrollAmount = containerWidth - 110;
    element.scrollLeft += scrollAmount;
  };

  return (
    <div className="px-5 md:px-16 w-full relative bg-gray-800 py-8">
      <h2 className="py-3 text-[20px] md:text-[36px] text-white font-semibold">Recommended For You</h2>

      {loading && (
        <p className="text-white">Loading...</p>
      )}
      
      {error && (
        <p className="text-red-500">{error}</p>
      )}

      {/* Left Arrow Button (Hidden on Mobile) */}
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute left-5 top-[50%] transform -translate-y-1/2 cursor-pointer z-10 p-2 rounded-full bg-gray-600 hover:bg-gray-500 focus:outline-none transition-all"
        onClick={() => sliderLeft(elementRef.current)}
      />

      {/* Right Arrow Button */}
      <HiChevronRight
        className="text-white text-[30px] absolute right-5 top-[50%] transform -translate-y-1/2 cursor-pointer z-10 p-2 rounded-full bg-gray-400 hover:bg-gray-500 focus:outline-none transition-all"
        onClick={() => sliderRight(elementRef.current)}
      />

      {/* Movie List Container */}
      <div
        className="flex gap-6 w-full overflow-auto scrollbar-none scroll-smooth mt-4"
        ref={elementRef}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg hover:border-[4px] border-gray-400"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRecommendation;
