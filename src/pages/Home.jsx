import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/sections/Hero';
import TrustBand from '../components/sections/TrustBand';
import ProblemSection from '../components/sections/ProblemSection';
import WhyRiseCart from '../components/sections/WhyRiseCart';
import FeaturesGrid from '../components/sections/FeaturesGrid';
import PricingSection from '../components/sections/PricingSection';
import HowItWorks from '../components/sections/HowItWorks';
import Ecosystem from '../components/sections/Ecosystem';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';

const Home = () => {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBand />
        <ProblemSection />
        <WhyRiseCart />
        <FeaturesGrid />
        <HowItWorks />
        <Ecosystem />
        {/* <PricingSection /> */}
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
