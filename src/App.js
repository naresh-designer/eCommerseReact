import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "./Components/Container/Container";
import { ThemeProvider } from "styled-components";
import GlobalStyled from "./Styled/GlobalStyled";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const theme = {
    common: {
      orangeBg: "#936e53",
      bg: "#f1eeea",
      greenBg: "#8bc34a",
      headingBg: "#000",
      fontColor: "#ccc",
      grayColor: "#413e3e",
      blackColor: "#000000",
      whiteColor: "#fff",
      merriweatherFont: '"Josefin Sans", system-ui',
      orangeColor: "#ba9173",
      fontWeight: "normal",
    },
    mobile: {
      smallM: "500px",
      tab: "768px",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <BrowserRouter>
          <Header />
          <Container />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
