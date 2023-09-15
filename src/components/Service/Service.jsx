import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Hire from "../HireUs2/Hire";
import Footer from "../Footer/Footer";
import BestHire from "./HireTheBest/BestHire";
import Services from "./Services/Services";
import Performance from "./Performance/Performance";
import Fun from "./HaveSomeFun/Fun";

export default function Service() {
  return (
    <>
      <Navbar />
      <Header />
      <BestHire />
      <Services />
      <Performance />
      <Fun />
      <Hire />
      <Footer />
    </>
  );
}
