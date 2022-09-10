import createContext from "./utils/createContext";

const context = createContext([[], () => {}]);

const useFavouredProducts = context.useContext;
const FavouredProductsProvider = context.Provider;

export { useFavouredProducts, FavouredProductsProvider };
