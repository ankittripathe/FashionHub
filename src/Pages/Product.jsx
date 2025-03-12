import React, { useContext } from "react";
import { ShopContextCreated } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";

const Product = () => {
  const { all_product } = useContext(ShopContextCreated);
  const { productId } = useParams();
  // find and match
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
    </div>
  );
};

export default Product;
