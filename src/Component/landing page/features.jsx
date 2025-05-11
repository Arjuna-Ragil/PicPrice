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
            <h3 className="text-xl font-semibold mb-2">Feature</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
          </div>

          <div className="bg-[#E0F2FE] w-auto h-full p-10 rounded-3xl space-y-2">
            <img src={Feature} className='size-10'/>
            <h3 className="text-xl font-semibold mb-2">Feature</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
          </div>

          <div className="bg-[#E0F2FE] w-auto h-full p-10 rounded-3xl space-y-2">
            <img src={Feature} className='size-10'/>
            <h3 className="text-xl font-semibold mb-2">Feature</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
          </div>
      </div>
    </section>
  );
};

export default Features;