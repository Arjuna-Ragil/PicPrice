import React from 'react';
import Navbar from '../Component/landing page/navbar';
import Home from '../Component/landing page/home';
import About from '../Component/landing page/about';
import Features from '../Component/landing page/features';
import Team from '../Component/landing page/team';
import Footer from '../Component/landing page/footer';

const LandingPage = () => {
  return (
    <>
      <div className='dark:bg-[#161E36]'>
        <Navbar />
        <Home />
        <About />
        <Features />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;