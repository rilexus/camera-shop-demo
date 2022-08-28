import createContextProvider from "./utils/createContextProvider";

const Provider = createContextProvider((products = []) => {
  console.log("Favoured products changed.", products);
  return products;
});

const useFavouredProducts = Provider.useContext;
const FavouredProductsProvider = Provider.Provider;

export { useFavouredProducts, FavouredProductsProvider };
