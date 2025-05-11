import React from 'react';
import FooterBackground from '../../assets/landingPage/footer.png'; 

const Footer = () => {
  return (
    <footer
      className="relative w-full h-64 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${FooterBackground})` }}
    >
      
      <p className="absolute bottom-4 text-white text-lg font-semibold z-10">copyright © 2025 PicPrice</p>
    </footer>
  );
};

export default Footer;
