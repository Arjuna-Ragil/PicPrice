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
        pt-25 
        2xl:pb-5
        relative 
        font-poppins
    `}>

      <p 
      className={`
        text-center 
        text-[12px] sm:text-[13px] lg:text-[15px] 2xl:text-3xl
      `}>Meet our amazing team</p>

      <h2 
      className={`
        text-lg sm:text-2xl lg:text-3xl 2xl:text-6xl
        font-semibold 
        mb-5 sm:mb-7 lg:mb-10 2xl:mb-18
        text-center
      `}>Our Team</h2>
      
      {/* container card */}
      <div 
      className={`
        flex 
        flex-col sm:flex-row
        pb-5 sm:pb-0
        justify-around 
        items-center
        gap-6 sm:gap-11 2xl:gap-17
      `}>

        {/* Card 1 */}
        <div 
        className={`
          relative 
          w-45 sm:w-50 lg:w-70 xl:w-80 2xl:w-150
          h-60 sm:h-80 lg:h-100 xl:h-110 2xl:h-180
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
            bg-[#E0F2FE]
            rotate-[9deg] 
            rounded-3xl 
            -z-10
          `}/>

          {/* white card*/}
          <div 
          className={`
            relative
            bg-white 
            border-x-1 
            border-b-2 
            border-t-1 
            border-[#E6E6E6]
            shadow-lg 
            flex 
            flex-col 
            justify-center 
            items-center 
            w-full 
            px-5 sm:px-6 lg:px-10 
            rounded-3xl 
            space-y-1 lg:space-y-2 2xl:space-y-5
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
                text-[12px] sm:text-sm lg:text-xl xl:text-2xl 2xl:text-4xl
                font-semibold 
              `}>Ahmad Ihsan</h3>

              <p 
              className={`
                text-[#9E9E9E]
                text-[9px] sm:text-[11px] lg:text-sm xl:text-lg 2xl:text-2xl
              `}>Front-End</p>
            </div>
            
            {/* icon social media */}
            <div 
            className={`
              flex 
              gap-3 
              mb-2 sm:mb-3 lg:mb-4 2xl:mb-7
              sm:mt-2 lg:mt-2 
            `}>

              <a 
              href="https://github.com/ahmadihsan" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaGithub 
                className={`
                  sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl
                  hover:text-black 
                  transition
                `}/>
              </a>

              <a 
              href="https://instagram.com/ahmadihsan" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaInstagram 
                className={`
                  sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl
                  hover:text-pink-500 
                  transition
                `}/>
              </a>

              <a 
              href="https://linkedin.com/in/ahmadihsan" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaLinkedin 
                className={`
                  sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl
                  hover:text-blue-600 
                  transition
                `}/>
              </a>
            </div>

            <p 
            className={`
              text-center 
              text-[10px] sm:text-[12px] lg:text-sm xl:text-lg 2xl:text-2xl
            `}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className={`
          relative 
          w-45 sm:w-50 lg:w-70 xl:w-80 2xl:w-150
          h-60 sm:h-80 lg:h-100 xl:h-110 2xl:h-180
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
            bg-[#E0F2FE]
            rotate-[9deg] 
            rounded-3xl 
            -z-10
          `}/>

            {/* White card */}
          <div className={`
            relative
            bg-white 
            border-x-1 
            border-b-2 
            border-t-1 
            border-[#E6E6E6]
            shadow-lg 
            flex 
            flex-col 
            justify-center 
            items-center 
            w-full 
            px-5 sm:px-6 lg:px-10 
            rounded-3xl 
            space-y-1 lg:space-y-2 2xl:space-y-5
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
                text-[12px] sm:text-sm lg:text-xl xl:text-2xl 2xl:text-4xl
                font-semibold 
              `}>Arjuna ragil</h3>

              <p 
              className={`
                text-[#9E9E9E]
                text-[9px] sm:text-[11px] lg:text-sm xl:text-lg 2xl:text-2xl
              `}>Front-End/Back-End</p>
            </div>
            
            {/* icon media social */}
            <div 
            className={`
              flex 
              gap-3 
              mb-2 sm:mb-3 lg:mb-4 2xl:mb-7
              sm:mt-2 lg:mt-2
            `}>

              <a 
              href="https://github.com/ahmadihsan" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaGithub 
                className={`
                  sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl
                  hover:text-black 
                  transition
                `}/>
              </a>

              <a 
              href="https://instagram.com/ahmadihsan" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaInstagram 
                className={`
                  sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl
                  hover:text-pink-500 
                  transition
                `}/>
              </a>

              <a 
              href="https://linkedin.com/in/ahmadihsan" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaLinkedin 
                className={`
                  sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl
                  hover:text-blue-600 
                  transition
                `}/>
              </a>
            </div>

            <p 
            className={`
              text-center 
              text-[10px] sm:text-[12px] lg:text-sm xl:text-lg 2xl:text-2xl
            `}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div 
        className={`
          relative 
          w-45 sm:w-50 lg:w-70 xl:w-80 2xl:w-150
          h-60 sm:h-80 lg:h-100 xl:h-110 2xl:h-180
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
            bg-[#E0F2FE]
            rotate-[9deg] 
            rounded-3xl 
            -z-10
          `}/>

          {/* white card*/}
          <div 
          className={`
            relative
            bg-white 
            border-x-1 
            border-b-2 
            border-t-1 
            border-[#E6E6E6]
            shadow-lg 
            flex 
            flex-col 
            justify-center 
            items-center 
            w-full 
            px-5 sm:px-6 lg:px-10 
            rounded-3xl 
            space-y-1 lg:space-y-2 2xl:space-y-5
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
                text-[12px] sm:text-sm lg:text-xl xl:text-2xl 2xl:text-4xl
                font-semibold 
              `}>Sarah Fajriah</h3>

              <p 
              className={`
                text-[#9E9E9E]
                text-[9px] sm:text-[11px] lg:text-sm xl:text-lg 2xl:text-2xl
              `}>UI/UX</p>
            </div>
                
            {/* icon media social */}
            <div 
            className={`
              flex 
              gap-3 
              mb-2 sm:mb-3 lg:mb-4 2xl:mb-7
              sm:mt-2 lg:mt-2
            `}>

              <a 
              href="https://github.com/ahmadihsan" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaGithub 
                className={`
                  sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl
                  hover:text-black 
                  transition
                `}/>
              </a>

              <a 
              href="https://instagram.com/ahmadihsan" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaInstagram 
                className={`
                  sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl
                  hover:text-pink-500 
                  transition
                `}/>
              </a>

              <a 
              href="https://linkedin.com/in/ahmadihsan" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaLinkedin 
                className={`
                  sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl
                  hover:text-blue-600 
                  transition
                `}/>
              </a>
            </div>

            <p 
            className={`
              text-center 
              text-[10px] sm:text-[12px] lg:text-sm xl:text-lg 2xl:text-2xl
            `}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
