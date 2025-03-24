import React from "react";
import "./CartItems.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Clear } from "@mui/icons-material";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) =>
        cartItems[e.id] > 0 ? (
          <div key={e.id}>
            <div className="cart-items-format cart-items-format-main">
              <img src={e.image} alt="" className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cart-items-quantity">{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <Clear
                className="carticon-remove-icon"
                onClick={() => {
                  removeFromCart(e.id);
                }}
              />
            </div>
            <hr />
          </div>
        ) : null
      )}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-items-total-items">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-items">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCCED TO CHECKOUT</button>
        </div>
        <div className="cart-items-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-items-promobox">
            <input type="text" placeholder="enter promocode" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
