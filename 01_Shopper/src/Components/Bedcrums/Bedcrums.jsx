import React from "react";
import "./Bedcrums.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Bedcrums = (props) => {
  const { product } = props;
  return (
    <div className="bedcrum">
      HOME <ArrowForwardIosIcon />
      SHOP <ArrowForwardIosIcon />
      {product.category}
      <ArrowForwardIosIcon />
      {product.name}
    </div>
  );
};

export default Bedcrums;
