import axios from "axios";

const movieBaseUrl = 'https://api.themoviedb.org/3';
const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmJiMDE0YzYxYTJiNDRjMjM3YWQ1ZTU3MWJlZjc1MiIsIm5iZiI6MTczMDM4MTQyNC4zMTk4NDg4LCJzdWIiOiI2NzIzNDVlMTAwM2M0YjViNWI2NDQ3MTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.T6I3_u4kl80s7Mt4UFMGbmbvD2UHzf4_l1pA6Rk8X2s';
const api_key = '2ec0d66f5bdf1dd12eefa0723f1479cf';

// Function to get trending movies
const getTrendingMovies = () => {
    return axios.get(`${movieBaseUrl}/trending/movie/day`, {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Accept': 'application/json'
        },
        params: {
            api_key: api_key, // Include API key as a parameter
            language: 'en-US'
        }
    });
};

// Function to get movie genres
const getGenres = () => {
    return axios.get(`${movieBaseUrl}/genre/movie/list`, {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Accept': 'application/json'
        },
        params: {
            api_key: api_key, // Include API key as a parameter
            language: 'en-US'
        }
    });
};

// Function to get movies by genre ID
const getMovieByGenreId = (id) => {
    return axios.get(`${movieBaseUrl}/discover/movie`, {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Accept': 'application/json'
        },
        params: {
            api_key: api_key, // Include API key as a parameter
            language: 'en-US',
            with_genres: id
        }
    });
};

export default {
    getTrendingMovies,
    getGenres,
    getMovieByGenreId
};
