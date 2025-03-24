import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assest/logo.png";
import cart_icon from "../Assest/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const menuIconToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <Link to={"/"} className="text-link">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>Shopper</p>
        </div>
      </Link>
      <MenuIcon className="dropmenu-icon" onClick={menuIconToggle} />
      <ul ref={menuRef} className="nav-menu">
        <Link to="/" className="text-link">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            Shop{menu === "shop" ? <hr /> : <></>}
          </li>
        </Link>
        <Link to="/men" className="text-link">
          <li
            onClick={() => {
              setMenu("men");
            }}
          >
            Men{menu === "men" ? <hr /> : <></>}
          </li>
        </Link>
        <Link to="/women" className="text-link">
          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            Women {menu === "women" ? <hr /> : <></>}
          </li>
        </Link>
        <Link to="kids" className="text-link">
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            Kids{menu === "kids" ? <hr /> : <></>}
          </li>
        </Link>
      </ul>

      {/* Search bar */}
      {/* <form className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value=""
          className="search-input"
        />
      </form> */}
      {/* search bar send */}

      <div className="nav-login-cart">
        <Link className="text-link" to="/login">
          <button>Login</button>
        </Link>
        <Link className="text-link" to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
