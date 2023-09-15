import React from "react";
import "./career.css";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Contact from "../../ContactUs/Contact";
import HiringMess from "./Hiring/HiringMessage/HiringMess";
import HiringProcess from "./Hiring/HiringProcess/HiringProcess";
import Apply from "./Apply/Apply";
import OpenVacancies from "./CurrentOpen/OpenVacancies";
import Hire from "../../HireUs2/Hire";
export default function Career() {
  return (
    <>
      <Header />
      <HiringMess />
      <HiringProcess />
      <OpenVacancies />
      <Apply />
      <Hire />
      <Footer />
    </>
  );
}
