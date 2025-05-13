import React from 'react';
import Feature from '../../assets/landingPage/feature.svg'

const Features = () => {
  return (
    <section 
    id="features" 
    className={`
        py-31
        px-10
        font-poppins
        w-full
        h-full
    `}>
        <p className='text-center text-[15px]'>Web Features</p>
        <h2 className="text-3xl font-semibold mb-8 text-center">Awesome Features</h2>

      <div className="flex flex-row items-center gap-8 ">
          <div className="bg-[#E0F2FE] w-auto h-full p-10 rounded-3xl space-y-2">
            <img src={Feature} className='size-10'/>
            <h3 className="text-xl font-semibold mb-2">Search using Gemini AI</h3>
            <p>Instantly identify products just by uploading a photo—Gemini AI understands images and finds what you're looking for.</p>
          </div>

          <div className="bg-[#E0F2FE] w-auto h-full p-10 rounded-3xl space-y-2">
            <img src={Feature} className='size-10'/>
            <h3 className="text-xl font-semibold mb-2">Multiple e-commerce sources</h3>
            <p>Compare prices from various online stores to ensure you get the best deal across the web.</p>
          </div>

          <div className="bg-[#E0F2FE] w-auto h-full p-10 rounded-3xl space-y-2">
            <img src={Feature} className='size-10'/>
            <h3 className="text-xl font-semibold mb-2">Save your product</h3>
            <p>Add items to your wishlist to track prices and revisit your favorite finds anytime.</p>
          </div>
      </div>
    </section>
  );
};

export default Features;