import React, { createContext} from "react";
import all_product from "../Components/Assets/all_product";

// create context
const ShopContextCreated = createContext(null);

const ShopContext = (props) => {
  const contextValue = { all_product };

  return (
    <ShopContextCreated.Provider value={contextValue}>
      {props.children}
    </ShopContextCreated.Provider>
  );
};

export default ShopContext;
export { ShopContextCreated };
