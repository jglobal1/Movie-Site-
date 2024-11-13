import React from 'react';
import disneyPic from '/src/assets/images/disney.png';
import marvelPic from '/src/assets/images/marvel.png';
import nationaIG from '/src/assets/images/nationalG.png';
import starwarPic from '/src/assets/images/starwar.png';
import pixarPic from '/src/assets/images/pixar.png';

import disney from '/src/assets/videos/disney.mp4';
import marvel from '/src/assets/videos/marvel.mp4';
import nationalVideo from '/src/assets/videos/national-geographic.mp4';
import pixar from '/src/assets/videos/pixar.mp4';
import starwar from '/src/assets/videos/star-wars (3).mp4';

function ProductionHouse() {
  const ProductHouseList = [
    { id: 1, image: disneyPic, video: disney },
    { id: 2, image: pixarPic, video: pixar },
    { id: 3, image: marvelPic, video: marvel },
    { id: 4, image: nationaIG, video: nationalVideo },
    { id: 5, image: starwarPic, video: starwar },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {ProductHouseList.map((item) => (
        <div
          key={item.id}
          className="relative border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out shadow-xl shadow-gray-800 overflow-hidden"
        >
          {/* Video with reduced brightness */}
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted // Ensure video is muted for autoplay to work
            className="absolute top-0 left-0 w-full h-full rounded-md z-0 opacity-80" // Reduced opacity for brightness effect
          />
          
          {/* PNG Logo on top of the video */}
          <img src={item.image} alt={`Thumbnail for ${item.id}`} className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
