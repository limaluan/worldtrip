import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    orange: {
      highlight: "#FFBA08",
    },
    dark: {
      black: "#000000",
      heading: "#47585B",
      info: "#999999",
    },
    light: {
      white: "#FFFFFF",
      heading: "#F5F8FA",
      info: "#DADADA",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  body: {
    background: "#FFFAAA"
  }
});
