import React from 'react';
import Igris from '../../assets/landingPage/igris.jpeg'
import Bellion from '../../assets/landingPage/bellion.jpeg'
import kaisel from '../../assets/landingPage/kaisel.jpeg'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Team = () => {
  return (
    <section 
      id="team" 
      className={`
        sm:px-10 lg:px-12 2xl:px-15
        pt-25 2xl:pt-60
        2xl:pb-5
        relative 
        font-poppins
    `}>

      <p 
      className={`
        text-center 
        text-xs sm:text-[13px] lg:text-[15px] 2xl:text-4xl
        dark:text-white
      `}>Meet our amazing team</p>

      <h2 
      className={`
        text-lg sm:text-2xl lg:text-3xl 2xl:text-7xl
        font-semibold 
        mb-5 sm:mb-7 lg:mb-10 2xl:mb-18
        text-center
        dark:text-white
      `}>Our Team</h2>
      
      {/* container card */}
      <div 
      className={`
        flex 
        flex-wrap sm:flex-row
        pb-5 sm:pb-0
        justify-around 2xl:justify-center
        items-center
        gap-4 sm:gap-11 2xl:gap-40
      `}>

        {/* Card 1 */}
        <div 
        className={`
          relative 
          w-35 sm:w-50 lg:w-70 2xl:w-140
          h-50 sm:h-80 lg:h-100 2xl:h-180
          rounded-3xl 
          flex 
          justify-center
        `}>

          {/* blue card */}
          <div 
          className={`
            absolute 
            -top-1 
            left-1 
            w-full 
            h-full 
            bg-border dark:bg-border-dark
            rotate-[9deg] 
            rounded-3xl 
            -z-10 dark:z-0
          `}/>

          {/* white card*/}
          <div 
          className={`
            relative
            bg-white dark:bg-feature-dark
            border-x-1 
            border-b-2 
            border-t-1 
            border-card dark:border-none
            shadow-lg 
            flex 
            flex-col 
            justify-center 
            items-center 
            w-full 
            px-5 sm:px-6 lg:px-10 
            rounded-3xl 
            space-y-1 lg:space-y-2 2xl:space-y-6
          `}>

            <img 
            src={Igris} 
            alt="Ahmad Ihsan"
            className={`
              rounded-full
              size-10 sm:size-12 lg:size-18 xl:size-25 2xl:size-40
            `}/>
            
            <div 
            className={`
              text-center
              2xl:space-y-1
            `}>

              <h3 
              className={`
                text-xs sm:text-sm lg:text-xl 2xl:text-5xl
                font-semibold 
              `}>Ahmad Ihsan</h3>

              <p 
              className={`
                text-position dark:text-position-dark
                text-[9px] sm:text-[11px] lg:text-sm 2xl:text-3xl
              `}>Front-End</p>
            </div>
            
            {/* icon social media */}
            <div 
            className={`
              flex 
              gap-2 2xl:gap-5
              mb-2 sm:mb-3 lg:mb-4 2xl:mb-7
              sm:mt-2 lg:mt-2 
            `}>

              <a 
              href="https://github.com/amdihsann" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaGithub 
                className={`
                  sm:text-xl lg:text-2xl 2xl:text-5xl
                  hover:text-black dark:hover:text-gray-200
                  transition
                `}/>
              </a>

              <a 
              href="https://www.instagram.com/iiisssnnnnn/" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaInstagram 
                className={`
                  sm:text-xl lg:text-2xl 2xl:text-5xl
                  hover:text-pink-500 
                  transition
                `}/>
              </a>

              <a 
              href="https://www.linkedin.com/in/ahmadihsan-/" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaLinkedin 
                className={`
                  sm:text-xl lg:text-2xl 2xl:text-5xl
                  hover:text-blue-600 
                  transition
                `}/>
              </a>
            </div>

            <p 
            className={`
              text-center 
              text-[10px] sm:text-xs lg:text-sm 2xl:text-3xl
            `}>
              Finding synergy in every challenge.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className={`
          relative 
          w-35 sm:w-50 lg:w-70 2xl:w-140
          h-50 sm:h-80 lg:h-100 2xl:h-180
          rounded-3xl 
          flex 
          justify-center
        `}>

            {/* blue card */}
          <div className={`
            absolute 
            -top-1 
            left-1 
            w-full 
            h-full 
            bg-border dark:bg-border-dark
            rotate-[9deg] 
            rounded-3xl 
            -z-10 dark:z-0
          `}/>

            {/* White card */}
          <div className={`
            relative
            bg-white dark:bg-feature-dark
            border-x-1 
            border-b-2 
            border-t-1 
            border-[#E6E6E6] dark:border-none
            shadow-lg 
            flex 
            flex-col 
            justify-center 
            items-center 
            w-full 
            px-5 sm:px-6 lg:px-10 
            rounded-3xl 
            space-y-1 lg:space-y-2 2xl:space-y-6
          `}>

            <img 
            src={Bellion} 
            alt="Arjuna Ragil"
            className={`
              rounded-full
              size-10 sm:size-12 lg:size-18 xl:size-25 2xl:size-40
            `}/>

            <div 
            className={`
              text-center
              2xl:space-y-1
            `}>
              
              <h3 
              className={`
                text-xs sm:text-sm lg:text-xl 2xl:text-5xl
                font-semibold 
              `}>Arjuna ragil</h3>

              <p 
              className={`
                text-position dark:text-position-dark
                text-[9px] sm:text-[11px] lg:text-sm 2xl:text-3xl
              `}>Front-End/Back-End</p>
            </div>
            
            {/* icon media social */}
            <div 
            className={`
              flex 
              gap-2 2xl:gap-5
              mb-2 sm:mb-3 lg:mb-4 2xl:mb-7
              sm:mt-2 lg:mt-2
            `}>

              <a 
              href="https://github.com/Arjuna-Ragil" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaGithub 
                className={`
                  sm:text-xl lg:text-2xl 2xl:text-5xl
                  hover:text-black dark:hover:text-gray-200
                  transition
                `}/>
              </a>

              <a 
              href="https://www.instagram.com/arjuna_ragill/" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaInstagram 
                className={`
                  sm:text-xl lg:text-2xl 2xl:text-5xl
                  hover:text-pink-500 
                  transition
                `}/>
              </a>

              <a 
              href="https://www.linkedin.com/in/arjunaragilputera/" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaLinkedin 
                className={`
                  sm:text-xl lg:text-2xl 2xl:text-5xl
                  hover:text-blue-600 
                  transition
                `}/>
              </a>
            </div>

            <p 
            className={`
              text-center 
              text-[10px] sm:text-xs lg:text-sm 2xl:text-3xl
            `}>
              Driven by innovation, grounded in excellence.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div 
        className={`
          relative 
          w-35 sm:w-50 lg:w-70 2xl:w-140
          h-50 sm:h-80 lg:h-100 2xl:h-180
          rounded-3xl 
          flex 
          justify-center
        `}>

          {/* blue card */}
          <div 
          className={`
            absolute 
            -top-1 
            left-1 
            w-full 
            h-full 
            bg-border dark:bg-border-dark
            rotate-[9deg] 
            rounded-3xl 
            -z-10 dark:z-0
          `}/>

          {/* white card*/}
          <div 
          className={`
            relative
            bg-white dark:bg-feature-dark
            border-x-1 
            border-b-2 
            border-t-1 
            border-[#E6E6E6] dark:border-none
            shadow-lg 
            flex 
            flex-col 
            justify-center 
            items-center 
            w-full 
            px-5 sm:px-6 lg:px-10 
            rounded-3xl 
            space-y-1 lg:space-y-2 2xl:space-y-6
          `}>

            <img 
            src={kaisel} 
            alt="Sarah Fajriah"
            className={`
              rounded-full
              size-10 sm:size-12 lg:size-18 xl:size-25 2xl:size-40
            `}/>
            
            <div 
            className={`
              text-center
              2xl:space-y-1
            `}>
              
              <h3 
              className={`
                text-xs sm:text-sm lg:text-xl 2xl:text-5xl
                font-semibold 
              `}>Sarah Fajriah</h3>

              <p 
              className={`
                text-position dark:text-position-dark
                text-[9px] sm:text-[11px] lg:text-sm 2xl:text-4xl
              `}>UI/UX</p>
            </div>
                
            {/* icon media social */}
            <div 
            className={`
              flex 
              gap-2 2xl:gap-5
              mb-2 sm:mb-3 lg:mb-4 2xl:mb-7
              sm:mt-2 lg:mt-2
            `}>

              <a 
              href="https://github.com/s-erzv" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaGithub 
                className={`
                  sm:text-xl lg:text-2xl 2xl:text-5xl
                  hover:text-black dark:hover:text-gray-200
                  transition
                `}/>
              </a>

              <a 
              href="https://www.instagram.com/s.erzv/" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaInstagram 
                className={`
                  sm:text-xl lg:text-2xl 2xl:text-5xl
                  hover:text-pink-500 
                  transition
                `}/>
              </a>

              <a 
              href="https://www.linkedin.com/in/serzv/" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaLinkedin 
                className={`
                  sm:text-xl lg:text-2xl 2xl:text-5xl
                  hover:text-blue-600 
                  transition
                `}/>
              </a>
            </div>

            <p 
            className={`
              text-center 
              text-[10px] sm:text-xs lg:text-sm 2xl:text-2xl
            `}>
              Bringing positive energy to the forefront.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
