import React from "react";
import "./Offers.css";
import exclusive_img from "../Assest/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offer">
      <div className="left-offer">
        <h1>Exclusive</h1>
        <h1>Offer For You</h1>
        <p>ONLY ON BEST SELLER PRODUCT</p>
        <button>Check Now</button>
      </div>
      <div className="right-offer">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  );
};

export default Offers;
