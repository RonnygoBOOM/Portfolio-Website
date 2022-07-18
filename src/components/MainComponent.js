import React from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import Experiments from "./ExperimentsComponent";
// import Languages from "./LanguagesComponent";

function Main() {
  return (
    <>
      <Header />
      <Home />
      {/* <Languages /> */}
      <About />
      <Experiments />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
