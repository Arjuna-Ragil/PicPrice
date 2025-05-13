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
                <br/>
                <p className='text-[15px]'>PicPrice is an AI-powered price comparison tool designed to simplify your shopping experience. 
                  By using advanced image recognition technology, our platform lets you snap or upload a photo of a product and instantly 
                  search across popular online stores to find the best prices and deals available. </p>
                  <br/>
                 <p className='text-[15px]'>Whether you're trying to avoid overpaying, track a wishlist item, or discover alternative sellers, 
                  PicPrice makes your journey smarter and more efficient—all with a single click.</p>
            </div>
      </div>
    </section>
  );
};

export default About;