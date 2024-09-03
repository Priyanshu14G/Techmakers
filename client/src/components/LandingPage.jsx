import React, { useState } from 'react';
import HeroSection from "./landing/HeroSection";
import FeatureSection from "./landing/FeatureSection";
import Workflow from "./landing/Workflow.jsx";
import Footer from "./landing/Footer";
import Pricing from "./landing/Pricing";
import Testimonials from "./landing/Testimonials";
import Login from './login/Login.jsx'; // Import your Login component
import Navbar from './Navbar.jsx'; // Import the Navbar component

const LandingPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <Navbar /> {/* Add Navbar here */}

      <div className={`max-w-7xl mx-auto pt-20 px-6 ${isLoginOpen ? 'filter blur-sm' : ''}`}>
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>

      {isLoginOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md mx-auto relative">
            <Login />
            <button
              onClick={handleCloseLogin}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <button
        onClick={handleLoginClick}
        className="fixed bottom-6 right-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
      >
        Start for Free
      </button>
    </>
  );
};

export default LandingPage;
