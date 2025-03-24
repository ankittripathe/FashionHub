import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assest/star_icon.png";
import star_dullicon from "../Assest/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-image-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dullicon} alt="" />
          <p>(200)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>
        <div className="product-display-right-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ipsum
          eum sed repellat deleniti tempore itaque, repudiandae illo obcaecati
          sint consequuntur voluptates placeat accusamus aspernatur quo sit
          porro fugit nostrum.
        </div>
        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="product-display-right-size-select">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="product-display-right-category">
          <span>Category:</span>
          Women,T-shirt,top crops
        </p>
        <p className="product-display-right-category">
          <span>Tags:</span>
          Modern,Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
