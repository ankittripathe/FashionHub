import React, { useContext } from "react";
import { ShopContextCreated } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";

const Product = () => {
  const { all_product } = useContext(ShopContextCreated);
  const { productId } = useParams();

  console.log("Product ID:", productId); // Check if it's correctly logging

  // find and match
  const product = all_product.find((item) => item.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
    </div>
  );
};

export default Product;
