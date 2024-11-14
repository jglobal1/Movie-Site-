import React from 'react'
import './index.css';
import Header from './Header';
import Slider from './Slider';
import ProductionHouse from './Components/ProductionHouse';
import GenreMovieList from './Components/GenreMovieList';
import MovieRecommendation from './Components/MovieRecommendation';
import Animated from './Components/Animated';
import Footer from './Components/Footer';
import Film from './Components/Film';

const App = () => {
  return (
    <div className='bg-[#181824]'>
     <Header />
     <Slider />
     <ProductionHouse />
    {/* <Film /> */}
     <Animated />
     <Footer />
    </div>
  )
}

export default App
