import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <section id="footer" className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 col-lg-4">
              <div className="card text-center pb-2 bg-dark footer-card">
                <div className="card-body text-white ">
                  <div className="card-title">
                    <span className="text-primary">
                      <h2>WAD</h2>
                    </span>
                    <p className="lead">
                      We work with a passion of taking challenges and creating
                      web app keeping in view latest technology and market
                      demands
                    </p>
                    <div className="d-flex justify-content-center social_icons align-items-center ">
                      <a href="https://www.linkedin.com/company/weboapp-discovery-private-limited/">
                        {" "}
                        <BsLinkedin style={{ marginRight: "2.5rem" }} />{" "}
                      </a>
                      <a href="https://instagram.com/weboappdiscovery.pvt">
                        <BsInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-12 col-lg-4">
              <div className="card text-center pb-2 bg-dark footer-card">
                <div className="card-body text-white text-center">
                  <div className="card-title">
                    <span className="text-danger">
                      <h2 style={{ textAlign: "start" }}>Get in Touch</h2>
                    </span>
                    <div className="icon-block footer-icon">
                      <FaMapMarkerAlt />
                      <a
                        href="https://maps.app.goo.gl/8kJs1qaqC4crJrTw7"
                        className="text-white"
                      >
                        <p>
                          Tricity Plaza, <br />
                          Peer Muchalla, Zirakpur,
                          <br /> PB. India 160104
                        </p>
                      </a>
                    </div>
                    <div className="icon-block footer-icon">
                      <IoIosCall />
                      <a
                        href="https://api.whatsapp.com/send?phone=7470377802"
                        className="text-white"
                      >
                        <p>&nbsp;&nbsp;+91 0000000000</p>
                      </a>
                    </div>
                    <div className="icon-block footer-icon">
                      <CgMail />
                      <a
                        href="mailto:info@webappdiscovery.com"
                        className="text-white"
                      >
                        <p>&nbsp;&nbsp;info@webappdiscovery.com</p>
                      </a>
                    </div>
                    <div className="icon-block footer-icon">
                      <AiOutlineSchedule />
                      <a className="text-white">
                        <p>&nbsp;&nbsp;Mon–Fri: 9:30am –6:30pm</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-12 col-lg-4">
              <div className="card text-center pb-2 bg-dark footer-card">
                <div className="card-body text-white text-center">
                  <div className="card-title">
                    <span className="text-warning">
                      <h2 style={{ textAlign: "start" }}>Quick Links</h2>
                    </span>
                    <div className="icon-block footer-icon">
                      <i className="bi bi-house-door-fill" />
                      <a href="#">
                        <p> &nbsp;&nbsp; Project</p>
                      </a>
                    </div>
                    <div className="icon-block footer-icon">
                      <i className="bi bi-person" />
                      <a href="#about">
                        <p> &nbsp;&nbsp; Our Team </p>
                      </a>
                    </div>
                    <div className="icon-block footer-icon">
                      <i className="bi bi-telephone" />
                      <a href="#contact">
                        <p> &nbsp;&nbsp; Fact</p>
                      </a>
                    </div>
                    <div className="icon-block footer-icon">
                      <i className="bi bi-star-fill" />
                      <a href="#services">
                        <p> &nbsp;&nbsp; Customer</p>
                      </a>
                    </div>
                    <div className="icon-block footer-icon">
                      <i className="bi bi-cast" />
                      <a href="#project">
                        <p> &nbsp;&nbsp; Project</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="text-light p-5" style={{ textAlign: "center" }}>
          Copyright © 2023 | Powered by WeboAppDiscovery{" "}
        </h4>{" "}
      </section>
    </>
  );
}
