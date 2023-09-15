import React from "react";
import "./about.css";
import Header from "../../Header/Header";
import HeaderTemp from "./HeaderTemp/HeaderTemp";
import Footer from "../../Footer/Footer";
import Process from "./6-D_Process/Process";
import Portfolio from "../../Portfolio/Portfolio";
import Testinomial from "../Testinomial/Testinomial";

export default function NavAbout() {
  return (
    <>
      <Header />
      <HeaderTemp />
      <Process />
      <Portfolio />
      <Testinomial />
      <Footer />
    </>
  );
}
