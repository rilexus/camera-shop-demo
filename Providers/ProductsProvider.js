import createContext from "./utils/createContext";

const context = createContext({}, "ProductsProvider");
const ProductProvider = context.Provider;
const useProducts = context.useContext;

const useProduct = (id) => {
  const [prod] = useProducts();
  return [prod[id]];
};

export { useProducts, ProductProvider, useProduct };
