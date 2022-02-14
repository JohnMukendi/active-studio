import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import RouterIdicator from "../state/context/RouterIdicator";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RouterIdicator />
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
