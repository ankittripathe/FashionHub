import React from "react";
import "./Hero.css";
import hand_icon from "../Assest/hand_icon.png";
import arrow_icon from "../Assest/arrow.png";
import hero_img from "../Assest/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRAVIAL ONLY</h2>
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
