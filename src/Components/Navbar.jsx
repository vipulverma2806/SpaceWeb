import React from "react";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="fixed flex justify-between top-0 right-0 w-full h-20 z-50 backdrop-blur-xs py-4 sm:py-4">
      <div className="flex">
        <div className="flex mx-4">
          <img src={Logo} alt="" />
        </div>
        <div className="flex items-center p-0">
          <h3 className="font-sans text-3xl">SpaceWeb</h3>
        </div>
      </div>
      <div className="flex items-center">
        <ul className="flex gap-6 text-xl font-medium">
          <li>ISRO</li>
          <li>NASA</li>
          <li>BARC</li>
          <li>DRDO</li>
        </ul>
      </div>
      <div className="mx-4 flex items-center">
        <a href="">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
