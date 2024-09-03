import { features } from "../landing/constants";
import "./features.css";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
        Smart Features for{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-800 text-transparent bg-clip-text">
          Proactive Care
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
          >
            <div className="flex flex-col items-center  text-blue-400 rounded-lg shadow-lg p-6 card">
              <div className="flex mx-6 h-12 w-12 p-2  text-blue-400 justify-center items-center rounded-full mb-4">
                {feature.icon}
              </div>
              <h5 className="text-xl mb-4">{feature.text}</h5>
              <p className="text-md text-neutral-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
