import React from 'react';
import { FiSearch } from 'react-icons/fi';
import backgroundImage from '../../assets/mainPic.png';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center gap-x-96 justify-around h-full bg-white bg-opacity-10">
        <div className="flex-grow-1 max-w-96 ml-6">
          <h1 className="text-[#252525] text-7xl">
            Bid high, own your destiny.
          </h1>
        </div>
        <div className="flex-grow-2 relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-md bg-white text-black w-full"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
        </div>
      </div>
    </div>
  );
};

export default Home;
