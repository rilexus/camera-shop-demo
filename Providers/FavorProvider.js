import createContext from "./utils/createContext";

const context = createContext([[], () => {}], "FavouredProductsProvider");

const useFavouredProducts = context.useContext;
const FavouredProductsProvider = context.Provider;

export { useFavouredProducts, FavouredProductsProvider };
