import React from "react";
import Navbar from "../Navbar";
import Hire from "../../HireUs2/Hire";
import Footer from "../../Footer/Footer";
import Apply from "../Career/Apply/Apply";
import Header from "../../Header/Header";

export default function JoinUs() {
  return (
    <section id="join_us">
      <Navbar />
      <Header />
      <Apply />
      <Hire />
      <Footer />
    </section>
  );
}
