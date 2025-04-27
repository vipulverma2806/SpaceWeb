import React from "react";

const Hero = () => {
  return (
    <div className="z-40 relative flex h-full justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="text-white">
          <h1 className="relative left-10 text-5xl font-bold ">
            INDIA'S SPACE
            <br /> MISSION
          </h1>
          <p className="relative left-10 top-2 w-2/3">
            India's space mission, led by ISRO, aims to explore and utilize
            space technology for scientific research, satellite deployment, and
            interplanetary exploration, showcasing India's growing capabilities.
          </p>
          <button className="button solid bg-blue-500 relative left-9 rounded-md px-3 py-2 top-5">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
