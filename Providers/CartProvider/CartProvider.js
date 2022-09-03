import createContext from "../utils/createContext";

const context = createContext({});
const CartProvider = context.Provider;

const fetchProductById = async (id) => {
  return fetch(`/api/product/${id}`).then((response) => {
    return response.json();
  });
};

const useCart = () => {
  const [cart, setCart] = context.useContext();

  const addProduct = ({ id, count }) => {
    setCart((prev) => {
      if (id in prev) {
        return {
          ...prev,
          [id]: prev[id] + count,
        };
      }
      return {
        ...prev,
        [id]: count,
      };
    });
  };

  const removeProduct = (id) => {};

  return [cart, { addProduct, removeProduct }];
};

export { useCart, CartProvider };
