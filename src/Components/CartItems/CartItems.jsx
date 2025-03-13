import React from "react";
import "./CartItems.css";
import { useContext } from "react";
import { ShopContextCreated } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart } =
    useContext(ShopContextCreated);

  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        <div className="cartItem-format">
          <img src="" alt="" className="carticon-product-icon" />
          <p></p>
          <p></p>
          <button className="cartItems-quantity"></button>
          <p>

          </p>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
