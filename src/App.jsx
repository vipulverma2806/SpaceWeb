import React from "react";
import earth from "./assets/earth.mp4";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Poster from "./Components/Poster";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[700px] ">
        <video
          className="fixed w-full top-0 object-cover "
          src={earth}
          type="video/mp4"
          autoPlay
          loop
          muted
        ></video>
        <Hero></Hero>
        <Services></Services>
        <Poster></Poster>
      </div>
    </div>
  );
};

export default App;
