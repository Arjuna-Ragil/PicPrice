import { React, useState, useEffect } from 'react';
import FooterBackground from '../../assets/landingPage/footer.png'; 
import DarkFooterBackground from '../../assets/landingPage/darkFooter.png'

const Footer = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    // Jalankan saat komponen pertama kali dirender
    checkDark();

    // Observasi perubahan class (misalnya saat user toggle dark mode)
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer
    key={isDark}
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
      style={{ backgroundImage: `url(${isDark ? DarkFooterBackground : FooterBackground })` }}
    >
      
      <p 
      className={`
        absolute 
        bottom-2 sm:bottom-4
        text-white 
        text-xs sm:text-sm lg:text-lg xl:text-xl 2xl:text-3xl
        font-semibold 
        z-10
      `}>copyright © 2025 PicPrice</p>
    </footer>
  );
};

export default Footer;
