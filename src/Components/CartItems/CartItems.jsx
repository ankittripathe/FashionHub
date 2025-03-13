import React from "react";
import "./CartItems.css";
import { useContext } from "react";
import { ShopContextCreated } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";


const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContextCreated);

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

      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div>
              <div className="cartItem-format">
                <img src={item.image} alt='' className='carticon-product-icon'/>
                <p>{item.name}</p>
                <p>{item.new_price}</p>
                <button className="cartItems-quantity">{cartItems[item.id]}</button>
                <p>{item.new_price * cartItems[item.id]}</p>
                <img src={remove_icon} onClick={() => {removeFromCart(item.id)}} alt=""/>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
