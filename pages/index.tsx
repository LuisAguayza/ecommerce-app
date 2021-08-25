import { ThemeProvider } from "@material-ui/core";
import type { NextPage } from "next";

import theme from "../themeConfig";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Posts from "./Posts";

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Posts />
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
