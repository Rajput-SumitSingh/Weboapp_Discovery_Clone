import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-transparent fixed-top">
        <div class="container">
          <div className="nav_bar_logo">
            <a class="navbar-brand" href="#">
              <span className="text-warning">W</span>A
              <span className="text-success">D</span>
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/service">
                  Service
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/career">
                  career
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a href="/joinUs" className="nav-link bg-success br-3 btn ">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
