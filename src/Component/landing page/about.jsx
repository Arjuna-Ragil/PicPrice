import React from 'react';

const About = () => {
  return (
    <section 
    id="about" 
    className=
    {`
        px-15
        pt-32
        font-poppins 
    `}>
      <div 
      className={`
        flex
        flex-row
        gap-10
        justify-center
        items-center
        `}>
            <div className='border-30 border-[#E0F2FE] rounded w-full'>
                <video controls className="w-full rounded ">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        
            <div className='w-full'>
                <p className='font-medium text-xl'>About web</p>
                <p className='text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>
      </div>
    </section>
  );
};

export default About;