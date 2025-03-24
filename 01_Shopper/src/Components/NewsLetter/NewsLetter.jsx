import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get Exclusive offers on your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="your email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
