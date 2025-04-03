import React, { useContext } from "react";

const productContext = React.createContext(null);

export default productContext.Provider;

export const useProductContext = () => useContext(productContext);
