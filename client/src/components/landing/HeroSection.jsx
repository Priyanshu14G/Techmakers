import video1 from "../landing/assets/video4.mp4";
import video2 from "../landing/assets/video6.mp4";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem('token');
    if (token) {
      
      navigate('/dashboard');
    } else {
     
      navigate('/login');
    }
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        MedCortico : Real-Time Monitoring, 
        <span className="bg-gradient-to-r from-blue-400 to-violet-800 text-transparent bg-clip-text">
          {" "}
          Precision Health
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Revolutionize your healthcare experience with our AI-driven platform.
      From predictive analytics to real-time alerts, we turn data into actionable insights for personalized care.
      Stay ahead with smarter diagnostics and streamlined patient management—healthcare, redefined.
      </p>
      <div className="flex justify-center my-10 ">
        <button className='bg-sky-500 hover:bg-sky-700 text-white' onClick={handleGetStarted}>
          Start for free
        
        </button>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border hover:bg-blue-300">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;