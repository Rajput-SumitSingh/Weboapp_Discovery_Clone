import React, { useState } from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import HireUs from "./components/HireUs/HireUs";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Contact from "./components/ContactUs/Contact";
import Footer from "./components/Footer/Footer";
import Career from "./components/Navbar/Career/Career";
import Hire from "./components/HireUs2/Hire";
export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Portfolio />
      <HireUs />
      <About />
      <Team />
      <Hire />
      <Contact />
      <Footer />
    </>
  );
}
