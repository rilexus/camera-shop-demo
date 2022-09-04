import createContext from "./utils/createContext";

const context = createContext({}, "ProductsProvider");
const ProductProvider = context.Provider;
const useProducts = context.useContext;

const useProduct = (id) => {
  const [products] = useProducts();
  const product = id in products ? products[id] : {};
  return [product];
};

export { useProducts, ProductProvider, useProduct };
