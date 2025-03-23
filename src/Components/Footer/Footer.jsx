import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pinterest_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import {
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Footer-Logo" />
        <p>Trend<span>Wear</span></p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          {/* <img src={instagram_icon} alt="Footer-Icon" /> */}
          <FaInstagram size={30} color="#E4405F" />
        </div>

        <div className="footer-icons-container">
          {/* <img src={whatsapp_icon} alt="Footer-Icon" /> */}
          <FaWhatsapp size={30} color="#25D366" />
        </div>

        <div className="footer-icons-container">
          {/* <img src={pinterest_icon} alt="Footer-Icon" /> */}
          <FaPinterest size={30} color="#BD081C" />
        </div>

        <div className="footer-icons-container">
          <FaYoutube size={30} color="#FF0000" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        Designed by Ankit Tripathi © 2025. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

