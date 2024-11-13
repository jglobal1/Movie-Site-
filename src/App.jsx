import React from 'react'
import './index.css';
import Header from './Header';
import Slider from './Slider';
import ProductionHouse from './AniminationSeries.jsx/ProductionHouse';
import GenreMovieList from './AniminationSeries.jsx/GenreMovieList';
import MovieRecommendation from './AniminationSeries.jsx/MovieRecommendation';
import Animated from './AniminationSeries.jsx/Animated';
import Footer from './AniminationSeries.jsx/Footer';

const App = () => {
  return (
    <div className='bg-[#181824]'>
     <Header />
     <Slider />
     <ProductionHouse />
     <GenreMovieList />
     <MovieRecommendation />
     <Animated />
     <Footer />
    </div>
  )
}

export default App
