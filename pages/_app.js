import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import RouterIdicator from "../state/context/RouterIdicator";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppContext } from "../component/context/AppContext";
import { useEffect, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps }) {

  const [showsDetails, setShowsDetails] = useState({
    title: "",
    description: '',
    img: '',
    likes: '',
    EpisodeCount: '',
    lastUpdated: ''

  })

  const DisplayShowDetails = (title, description, img, likes, EpisodeCount, lastUpdated) => {

    setShowsDetails({
      title: title,
      description: description,
      img: img,
      likes: likes,
      EpisodeCount: EpisodeCount,
      lastUpdated: lastUpdated
    })
  }

  return (
    <AppContext.Provider value={{ showsDetails, setShowsDetails, DisplayShowDetails }}>
      <RouterIdicator />
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
