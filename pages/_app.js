import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "../ui";
import { FavouredProductsProvider } from "../Providers/FavorProvider";
import { useState } from "react";

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

  return (
    <ThemeProvider theme={t}>
      <GlobalCSS />
      <FavouredProductsProvider value={favouredProducts}>
        <Component {...pageProps} />
      </FavouredProductsProvider>
    </ThemeProvider>
  );
}

export default MyApp;
