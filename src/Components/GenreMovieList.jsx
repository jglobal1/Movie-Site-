import React from 'react';
import genere from '/src/Constant/GeneralList.jsx'; // Update the path to where genere is defined

const GenreMovieList = () => {
  return (
    <div>
      {genere.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default GenreMovieList;
