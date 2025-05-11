import React from 'react';
import Laptop from '../../assets/landingPage/laptop.svg';
import TopBackground from '../../assets/landingPage/topBackground.png';

const Home = () => {
  return (
    <section
      id="home"
      className={`
        w-full 
        min-h-screen 
        mb-20
        font-poppins 
        pb-30
        bg-cover
        bg-center
        relative
        bg-no-repeat
        lg:bg-cover
        2xl:pb-70
        2xl:bg-cover
      `}
      style={{ backgroundImage: `url(${TopBackground})` }}
    >
      <div
        className={`
          flex
          flex-row 
          items-center 
          justify-center
          relative
          px-4 md:px-10 lg:px-20
          w-full
          z-10
          min-h-screen
          max-w-screen-2xl
          mx-auto
        `}
      >
        {/* Left: Text Section */}
        <div className="w-1/2 text-left space-y-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Shop Smarter with Just a Photo</h1>
          <p className="text-lg md:text-xl">
            Snap it. Search it. Compare prices instantly across your favorite stores—all powered by AI.
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="w-1/2 ">
          <img src={Laptop} alt="Laptop Illustration" className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Home;
