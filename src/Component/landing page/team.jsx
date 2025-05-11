import React from 'react';
import Photo from '../../assets/landingPage/photo.svg';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Team = () => {
  return (
    <section 
      id="team" 
      className="px-12 py-25 relative font-poppins"
    >
      <p className="text-center text-[15px]">Meet our amazing team</p>
      <h2 className="text-3xl font-semibold mb-10 text-center">Our Team</h2>
      
      <div className="flex flex-wrap justify-around items-center ">

        {/* Card 1 */}
        <div className="relative w-70 h-100 rounded-3xl flex justify-center">

          {/* Background biru miring */}
          <div className="absolute -top-1 left-1 w-full h-full bg-blue-200 rotate-[9deg] rounded-3xl -z-10" />

          {/* Card putih */}
          <div className="relative bg-white border-x-1 border-b-2 border-t-1 border-gray-200 shadow-lg flex flex-col justify-center items-center w-full px-10 rounded-3xl space-y-2">
            <img src={Photo} className="size-10" alt="Ahmad Ihsan" />
            <h3 className="text-xl font-semibold mb-2">Ahmad Ihsan</h3>
            <p className="text-[#9E9E9E]">position</p>

            <div className="flex gap-3 mt-2">
              <a href="https://github.com/ahmadihsan" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl hover:text-black transition" />
              </a>
              <a href="https://instagram.com/ahmadihsan" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-pink-500 transition" />
              </a>
              <a href="https://linkedin.com/in/ahmadihsan" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-blue-600 transition" />
              </a>
            </div>

            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-70 h-100 rounded-3xl flex justify-center">

            {/* Background biru miring */}
          <div className="absolute -top-1 left-1 w-full h-full bg-blue-200 rotate-[9deg] rounded-3xl -z-10" />

            {/* card putih */}
          <div className="bg-white border-x-1 border-b-2 border-t-1 relative border-gray-200 shadow-lg flex flex-col justify-center items-center w-full px-10 rounded-3xl space-y-2">
            <img src={Photo} className="size-10" alt="Arjuna Ragil" />
            <h3 className="text-xl font-semibold mb-2">Arjuna Ragil</h3>
            <p className="text-[#9E9E9E]">position</p>
            <div className="flex gap-3 mt-2">
              <a href="https://github.com/ahmadihsan" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl hover:text-black transition" />
              </a>
              <a href="https://instagram.com/ahmadihsan" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-pink-500 transition" />
              </a>
              <a href="https://linkedin.com/in/ahmadihsan" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-blue-600 transition" />
              </a>
            </div>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-70 h-100 rounded-3xl flex justify-center">

            {/* Background biru miring */}
          <div className="absolute -top-1 left-1 w-full h-full bg-blue-200 rotate-[9deg] rounded-3xl -z-10" />

            {/* card putih */}
          <div className="bg-white relative border-x-1 border-b-2 border-t-1 border-gray-200 shadow-lg flex flex-col justify-center items-center w-full px-10 rounded-3xl space-y-2">
            <img src={Photo} className="size-10" alt="Sarah Fajriah" />
            <h3 className="text-xl font-semibold mb-2">Sarah Fajriah</h3>
            <p className="text-[#9E9E9E]">position</p>
            <div className="flex gap-3 mt-2">
              <a href="https://github.com/ahmadihsan" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl hover:text-black transition" />
              </a>
              <a href="https://instagram.com/ahmadihsan" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-pink-500 transition" />
              </a>
              <a href="https://linkedin.com/in/ahmadihsan" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-blue-600 transition" />
              </a>
            </div>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
