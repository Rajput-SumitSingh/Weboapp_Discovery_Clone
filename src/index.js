import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createElement } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Career from "./components/Navbar/Career/Career";
import Navbar from "./components/Navbar/Navbar";
import NavAbout from "./components/Navbar/NavAbout/NavAbout";
import Service from "./components/Service/Service";
import JoinUs from "./components/Navbar/JoinUs/JoinUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<NavAbout />} />
        <Route path="/service" element={<Service />} />
        <Route path="/joinUs" element={<JoinUs />} />
      </Routes>
    </BrowserRouter>
  </>
);
