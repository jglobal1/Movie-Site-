import React, { useState } from 'react';
import logo from '/src/assets/images/Untitled design (1).png';
import { HiHome, HiMagnifyingGlass, HiPlayCircle } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';

function Header() {
  const [toggle, setToggle] = useState(false);



  const menu = [
    { name: 'HOME', icon: HiHome, action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) }, // Scrolls to top
    { name: 'SEARCH', icon: HiMagnifyingGlass, action: () => document.getElementById('movie-section').scrollIntoView({ behavior: 'smooth' }) },
    { name: 'MOVIES', icon: HiPlayCircle },
    { name: 'WATCHLIST', icon: HiPlus }
  ];

  return (
    <div className="flex items-center justify-between p-5 bg-black text-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo.png"
          className="w-[60px] h-[60px] object-cover" // Slightly larger logo
        />
      </div>

      {/* Centered Menu for Desktop */}
      <div className="hidden md:flex gap-10 items-center justify-center flex-grow">
        {menu.map((item) => (
          <HeaderItem 
            key={item.name} 
            name={item.name} 
            Icon={item.icon} 
            iconSize="text-2xl"  // Larger icon size
            textSize="text-lg"    // Larger text size
            onClick={item.action} // Call the action if defined
          />
        ))}
      </div>

      {/* Mobile Responsiveness */}
      <div className="md:hidden flex items-center gap-6">
        {/* Display first three icons for mobile */}
        {menu.slice(0, 3).map((item) => (
          <HeaderItem 
            key={item.name} 
            name={''} 
            Icon={item.icon} 
            iconSize="text-xl"  // Increased icon size for mobile
            onClick={item.action} // Call the action if defined
          />
        ))}

        {/* Toggle Menu Button */}
        <div className="relative" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiDotsVertical} iconSize="text-xl" />

          {/* Dropdown Menu */}
          {toggle && (
            <div className="absolute mt-2 right-0 bg-[#121212] text-white border-[1px] p-4 rounded-md shadow-lg">
              {menu.slice(3).map((item) => (
                <HeaderItem 
                  key={item.name} 
                  name={item.name} 
                  Icon={item.icon} 
                  iconSize="text-lg" 
                  textSize="text-base"
                  onClick={item.action} // Call the action if defined
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
