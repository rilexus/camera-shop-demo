import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "../ui";
import { FavouredProductsProvider } from "../Providers/FavorProvider";
import { useState } from "react";
import { ProductProvider } from "../Providers/ProductsProvider";

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

const products = {
  5: {
    id: 5,
    rating: 4,
    src: "/polaroid_400x400.png",
    price: "300$",
    name: "Polaroid",
  },
  6: {
    id: 6,
    rating: 5,
    src: "/intex_sq_400x400.png",
    price: "300$",
    name: "Intex SQ",
  },
  7: {
    rating: 4,
    id: 7,
    src: "/intax_mini_400x400.png",
    price: "300$",
    name: "Intex Mini",
  },

  8: {
    rating: 5,
    id: 8,
    src: "/polaroid_400x400.png",
    price: "300$",
    name: "Polaroid",
  },
  9: {
    rating: 5,
    id: 9,
    src: "/intex_sq_400x400.png",
    price: "300$",
    name: "Intex SQ",
  },
  10: {
    rating: 3,
    id: 10,
    src: "/intax_mini_400x400.png",
    price: "300$",
    name: "Intex Mini",
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
