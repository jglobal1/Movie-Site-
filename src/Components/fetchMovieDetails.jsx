import axios from 'axios';
import { useState } from 'react';

const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`https://api.example.com/movies/${movieId}`, {
      headers: {
        Authorization: `Bearer YOUR_TOKEN`, // Add your token if required
      },
    });
    setMovieDetails(response.data);
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};
