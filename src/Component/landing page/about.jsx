import React from 'react';

const About = () => {
  return (
    <section 
    id="about" 
    className={`
      pt-32
      sm:px-8 lg:px-11 xl:px-15 2xl:px-25
      font-poppins 
    `}>

      {/* container */}
      <div 
      className={`
        flex
        flex-col
        px-5 sm:px-0
        sm:flex-row
        gap-3 sm:gap-6 lg:gap-10 xl:gap-12 2xl:gap-18
        justify-center
        items-center
      `}>
        
        <div 
        className={`
          border-10 sm:border-20 lg:border-30 2xl:border-40
          border-border dark:border-border-dark
          rounded 
          w-full
        `}>
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/YNIHagVNT4I"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div 
        className={`
          w-full 
          space-y-1
          xl:space-y-2 
          2xl:space-y-5
          dark:text-white
          px-8 sm:px-0
        `}>
          
          <p 
          className={`
            font-medium 
            text-center sm:text-left
            text-lg lg:text-xl xl:text-4xl 2xl:text-6xl
          `}>
            About web</p>
            
          <p 
          className={`
            text-justify
            text-[11px] sm:text-xs lg:text-[15px] 2xl:text-3xl
          `}>
            PicPrice is an AI-powered price comparison tool designed to simplify your shopping experience. By using advanced image recognition technology, our platform lets you snap or upload a photo of a product and instantly search across popular online stores to find the best prices and deals available. 
            Whether you're trying to avoid overpaying, track a wishlist item, or discover alternative sellers, PicPrice makes your journey smarter and more efficient—all with a single click.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;