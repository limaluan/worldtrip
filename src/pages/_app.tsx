import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";

import "../styles/slider.css";
import { Header } from "../Components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </ChakraProvider>
  );
}

export default MyApp;
