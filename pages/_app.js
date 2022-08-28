import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "../ui";

const GlobalCSS = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
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
  return (
    <ThemeProvider theme={t}>
      <GlobalCSS />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
