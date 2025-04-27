import React from "react";
import wave2 from "../assets/wave2.gif";
import moon from "../assets/moonSurface.png";
import { IoRocketSharp as Rocket } from "react-icons/io5";
import { GiMaterialsScience as Research } from "react-icons/gi";
const Services = () => {
  const Services = [
    {
      icon: <Rocket></Rocket>,
      title: "DEFENCE",
      info: "Protecting Earth from cosmic threats through advanced space defense systems.",
    },
    {
      icon: <Research/>,
      title: "RESEARCH",
      info: "Studying celestial bodies, cosmic phenomena, origins, and potential extraterrestrial life.",
    },
    {
      icon: <Rocket></Rocket>,
      title: "DEFENCE",
      info: "Protecting Earth from cosmic threats through advanced space defense systems.",
    },
  ];
  return (
    <div className="relative">
      <img src={moon} className="z-10 relative" />
      <div className="absolute top-30 z-20 w-full bg-gradient-to-b from-transparent from-10% to-black to-60% h-30"></div>
      <img src={wave2} className="z-10 w-full relative" />
      <div className="absolute z-30 top-60 w-full grid grid-cols-3 place-items-center-safe container gap-3" id="vipul">
        {Services.map((ser) => {
          return (
            <div className="h-80 w-3xs  bg-blue-600 text-white rounded-2xl p-9 gap-3 flex flex-col">
              <div className="text-7xl flex justify-center">{ser.icon}</div>
              <div className="text-3xl font-light flex justify-center">
                {ser.title}
              </div>
              <div className="text-center">{ser.info}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
