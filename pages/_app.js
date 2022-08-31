import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "../ui";
import { FavouredProductsProvider } from "../Providers/FavorProvider";
import { useState } from "react";
import { ProductProvider } from "../Providers/ProductsProvider";
import products from "../products";

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
  const prod = useState(products);

  return (
    <ThemeProvider theme={t}>
      <GlobalCSS />
      <ProductProvider value={prod}>
        <FavouredProductsProvider value={favouredProducts}>
          <Component {...pageProps} />
        </FavouredProductsProvider>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default MyApp;
