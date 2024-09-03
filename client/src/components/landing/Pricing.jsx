import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../landing/constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing Plans
      </h2>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-8 border border-neutral-700 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-semibold mb-4">
                  {option.title}
                  {option.title === "Pro" && (
                    <span className="bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text text-sm ml-2">
                      (Most Popular)
                    </span>
                  )}
                </p>
                <p className="text-4xl sm:text-5xl font-bold mb-4">
                  <span >{option.price}</span>
                  <span className="text-neutral-400 text-lg">/Month</span>
                </p>
              </div>
              <ul className="list-disc pl-6 mb-8 text-neutral-600">
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-4 flex items-center">
                    <CheckCircle2 className="text-green-400" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 px-6 py-3 mt-4 tracking-tight text-lg bg-blue-400 text-white border border-violet-800 rounded-lg transition-transform transform hover:scale-105 hover:bg-violet-800"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
