import createContext from "../utils/createContext";

const context = createContext({});
const CartProvider = context.Provider;

const fetchProductById = async (id) => {
  return fetch(`/api/product/${id}`).then((response) => response.json());
};

const fetchProductsByIds = (ids) => {
  return fetch(`/api/products/${ids.join(",")}`).then((r) => r.json());
};

const useCart = () => {
  const [cart, setCart] = context.useContext();

  const addProduct = (product, count) => {
    if (!(product.id in cart)) {
      setCart({
        ...cart,
        [product.id]: { ...product, count },
      });
      return;
    }

    setCart({
      ...cart,
      [product.id]: {
        ...cart[product.id],
        count: count + cart[product.id].count,
      },
    });
  };

  const removeProduct = (id) => {};

  return [cart, { addProduct, removeProduct }];
};

export { useCart, CartProvider };
