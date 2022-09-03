import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "../ui";
import { FavouredProductsProvider } from "../Providers/FavorProvider";
import { useState } from "react";
import { ProductProvider } from "../Providers/ProductsProvider";
import products from "../products";
import { CartProvider } from "../Providers/CartProvider/CartProvider";

const GlobalCSS = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  * {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const t = {
  some: (/* theme */) => {
    // extend the defaultTheme
    // "some" will be merged with the default theme
    return {};
  },
};

function MyApp({ Component, pageProps }) {
  const favouredProducts = useState([]);
  const cartState = useState({});
  const productsState = useState({});
  return (
    <ThemeProvider theme={t}>
      <GlobalCSS />
      <ProductProvider value={productsState}>
        <CartProvider value={cartState}>
          <FavouredProductsProvider value={favouredProducts}>
            <Component {...pageProps} />
          </FavouredProductsProvider>
        </CartProvider>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default MyApp;
