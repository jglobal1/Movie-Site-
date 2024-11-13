import React, { useEffect, useRef, useState } from 'react';
import GlobalAPI from './Services/GlobalAPI';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const screenWidth = window.innerWidth;

function Slider() {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state
    const elementRef = useRef();

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        try {
            const resp = await GlobalAPI.getTrendingMovies(); // Adjust to use getTrendingMovies
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Loading indicator
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110;
    };

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110;
    };

    return (
        <div className="relative">
            {/* Left Arrow Button */}
            <HiChevronLeft 
                className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] 
                cursor-pointer' 
                onClick={() => sliderLeft(elementRef.current)}
            />

            {/* Right Arrow Button */}
            <HiChevronRight 
                className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] 
                cursor-pointer right-0' 
                onClick={() => sliderRight(elementRef.current)}
            />

            {/* Movie Slider */}
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
                {movieList.map((item) => (
                    <img
                        key={item.id} // Ensure each image has a unique key
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        alt={item.title} // Add alt text for accessibility
                        className='min-w-full h-[200px] md:h-[400px] lg:h-[500px] object-cover mr-5 rounded-lg hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;
