import React from 'react';
import Feature from '../../assets/landingPage/feature.svg'

const Features = () => {
  return (
    <section 
    id="features" 
    className={`
      py-31 2xl:py-90
      sm:px-9 lg:px-12 xl:px-20 2xl:px-25
      font-poppins
      w-full
      h-full
    `}>
      
      <p 
      className={`
        text-center 
        text-xs sm:text-[13px] lg:text-[15px] 2xl:text-4xl
        dark:text-white
        `}>
          Web Features</p>

      <h2 
      className={`
        sm:text-xl lg:text-3xl 2xl:text-7xl
        font-semibold 
        sm:mb-5 lg:mb-8 2xl:mb-15
        text-center
        dark:text-white
      `}>
        Awesome Features</h2>

      {/* container */}
      <div 
      className={`
        flex
        flex-col sm:flex-row 
        items-center
        justify-center sm:justify-around 2xl:justify-center
        gap-3 sm:gap-5 lg:gap-12 2xl:gap-20
      `}>

        {/* first feature */}
        <div 
        className={`
          bg-feature dark:bg-feature-dark
          w-55 sm:w-80 2xl:w-150
          h-50 sm:h-80 2xl:h-150
          py-6 sm:py-8 lg:py-13 xl:py-15 2xl:py-20
          px-8 sm:px-10 2xl:px-20
          rounded-3xl 
          space-y-2 xl:space-y-3 2xl:space-y-7
          flex 
          flex-col
          justify-center
          items-start
          `}>
            
            <img 
            src={Feature} 
            className={`
              size-6 sm:size-8 lg:size-10 2xl:size-17
            `}/>

            <h3 
            className={`
              text-sm sm:text-lg lg:text-xl 2xl:text-5xl
              font-semibold 
              mb-1 sm:mb-2 2xl:mb-5
            `}>
              Search using Gemini AI</h3>

            <p
            className={`
              text-[10px] sm:text-xs 2xl:text-3xl   
            `}>
              Instantly identify products just by uploading a photo—Gemini AI understands images and finds what you're looking for.</p>
          </div> 
          
          {/* second feature */}
          <div 
          className={`
            bg-feature dark:bg-feature-dark
            w-55 sm:w-80 xl:w- 2xl:w-150
            h-50 sm:h-80 xl:h- 2xl:h-150
            py-6 sm:py-8 lg:py-13 xl:py-15 2xl:py-20
            px-8 sm:px-10 2xl:px-20
            rounded-3xl 
            space-y-2 xl:space-y-3 2xl:space-y-7
            flex 
            flex-col
            justify-center
            items-start
          `}>
            <img 
            src={Feature} 
            className={`
              size-6 sm:size-8 lg:size-10 2xl:size-17
            `}/>

            <h3 
            className={`
              text-sm sm:text-lg lg:text-xl 2xl:text-5xl
              font-semibold 
              mb-1 sm:mb-2 2xl:mb-5
            `}>Multiple e-commerce sources</h3>

            <p 
            className={`
              text-[10px] sm:text-xs 2xl:text-3xl
            `}>Compare prices from various online stores to ensure you get the best deal across the web.</p>
          </div>
            
          {/* third feature */}
          <div 
          className={`
            bg-feature dark:bg-feature-dark
            w-55 sm:w-80 xl:w- 2xl:w-150
            h-50 sm:h-80 xl:h- 2xl:h-150
            py-6 sm:py-8 lg:py-13 xl:py-15 2xl:py-20
            px-8 sm:px-10 2xl:px-20
            rounded-3xl 
            space-y-2 xl:space-y-3 2xl:space-y-7
            flex 
            flex-col
            justify-center
            items-start
          `}>
            <img 
            src={Feature} 
            className={`
              size-6 sm:size-8 lg:size-10 2xl:size-17
            `}/>

            <h3 
            className={`
              text-sm sm:text-lg lg:text-xl 2xl:text-5xl
              font-semibold 
              mb-1 sm:mb-2 2xl:mb-5
            `}>Save your product</h3>

            <p
            className={`
              text-[10px] sm:text-xs 2xl:text-3xl
            `}>Add items to your wishlist to track prices and revisit your favorite finds anytime.</p>
          </div>
      </div>
    </section>
  );
};

export default Features;