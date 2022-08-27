import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalCSS />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
