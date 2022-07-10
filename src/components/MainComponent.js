import React from "react";
import Header from "./HeaderComponent";
import Home from "../Pages/Home";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import Languages from "./LanguagesComponent";

function Main() {
  return (
    <>
      <Header />
      <Home />
      <Languages />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
