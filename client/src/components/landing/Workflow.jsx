import { CheckCircle2 } from "lucide-react";
import video3 from "../landing/assets/video8.mp4";
import { checklistItems } from "../landing/constants";
import "./Workflow.css"; // Ensure this path is correct

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide bounce-in">
        Our Smooth Process:{" "}
        <span className="bg-gradient-to-r from-blue-400 to-violet-800 text-transparent bg-clip-text">
          From Data to Diagnosis
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-3/5 h-186 border border-orange-700 shadow-sm shadow-orange-400 my-4 pulse"
          >
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className="flex mb-12 checklist-item"
            >
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full pulse">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl bounce-in">{item.title}</h5>
                <p className="text-md text-neutral-500 bounce-in">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
