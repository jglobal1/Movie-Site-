import React, { useEffect } from 'react';
import axios from 'axios'; // Import axios

function Film() {
    const API_URL = 'https://api.themoviedb.org/3';

    // Corrected the typo in the function name
    const fetchMovies = async () => {
        try {
            const data = await axios.get(`${API_URL}/discover/movie`, {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY, 
                },
            });
            console.log('data', data);
        } catch (error) {
            console.error('Error fetching movies', error); // Error handling
        }
    };

    // Use useEffect to run fetchMovies once when the component mounts
    useEffect(() => {
        fetchMovies();
    }, []); // Empty array to run only once on component mount

    return (
        <div>
            <h2>Film Component</h2>
        </div>
    );
}

export default Film;
