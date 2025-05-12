import React from 'react';
import FooterBackground from '../../assets/landingPage/footer.png'; 

const Footer = () => {
  return (
    <footer
      className={`
        relative 
        w-full 
        h-22 sm:h-48 lg:h-64 xl:h-78 2xl:h-130
        bg-cover 
        bg-center 
        flex 
        items-center 
        justify-center
      `}
      style={{ backgroundImage: `url(${FooterBackground})` }}
    >
      
      <p className={`
        absolute 
        bottom-2 sm:bottom-4
        text-white 
        text-[12px] sm:text-sm lg:text-lg xl:text-xl 2xl:text-3xl
        font-semibold 
        z-10
      `}>copyright © 2025 PicPrice</p>
    </footer>
  );
};

export default Footer;
