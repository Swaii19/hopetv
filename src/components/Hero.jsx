import React from "react";
import lago from "../assets/lago.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img className="w-full h-full object-cover" src={lago} alt="hero-lago" />
    </div>
  );
};

export default Hero;
