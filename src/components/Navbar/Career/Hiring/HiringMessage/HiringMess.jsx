import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import "./hiringmessage.css";
import HiringMessageImage from "../../../../../assets/HiringMessage1.png";

export default function HiringMess() {
  return (
    <>
      <section id="hiring">
        <div className="container p-5">
          <div className="row">
            <div className="md-col-12 col-12">
              <div className="section-header text-center pb-5">
                <h2 className="text-danger">
                  <span className="text-primary">We Are</span> Hiring !
                </h2>
                <p>
                  Team Weboapp Discovery is the blend of extraordinary
                  specialists at your assistance who are Experienced, Talented,
                  Creative and Full of Ideas because that’s how we make it a
                  point to address all the needs of our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="hiring_message_img">
                <img
                  src={HiringMessageImage}
                  alt="HiringMessage"
                  className="img-fluid rounded-circle"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="hiring_message_text">
                <span>
                  <IoMdArrowDropright />
                  We are on the hunt for the next generation of innovators with
                  new ideas and visions to make this world a better place for
                  everyone.
                </span>
                <br />
                <br />
                <span>
                  <IoMdArrowDropright />
                  If you’re one of those who knows how to carve new paths in a
                  crowded territory, our company would love to talk to you. So,
                  what are you waiting for ?
                </span>
                <br />
                <br />
                <span>
                  <IoMdArrowDropright />
                  Grab the opportunity to become a part of our organization. We
                  want to hear from your side.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/*
    <section id="about" className="about section-padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-12 col-12">
        <div className="about-img">
          <img
            src="./static/myimage-no-background.png"
            alt=""
            className="img-fluid rounded-circle"
          />
          <div className="social">
            <a href="https://www.instagram.com/sumit_singh.in/">
              <i className="bi bi-instagram" />
            </a>
            <a href="https://www.linkedin.com/in/sumit-kumar-singh-b89b3920b/">
              <i className="bi bi-linkedin" />
            </a>
            <a href="#contact">
              <i className="bi bi-google" />
            </a>
            <a href="https://github.com/Rajput-SumitSingh">
              <i className="bi bi-github" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
        <div className="about-text">
          <h2 className="text-warning">
            About
            <span className="text-danger"> Me</span>
          </h2>
          <p>
            I am a motivated and skilled B. Tech student with a strong passion
            for full stack development. My programming skills include
            proficiency in several languages such as java, Servlet, JDBC, MySQL,
            Spring and Spring Boot. With my expertise in these technologies, I
            have successfully completed multiple projects, including web
            applications and java based gui applications that cater to client
            requirements. My ability to quickly grasp new concepts and apply
            them to real world problems has enabled me to contribute to the
            development of complex software systems. I am dedicated to staying
            up-to-date with the latest industry trends and technologies,
            continuously learning and expanding my skill set. My ultimate goal
            is to deliver high-quality, reliable, and efficient software
            solutions that meet client needs and exceed expectations.
          </p>
          <div className="about-btn">
            <a href="./static/MyResume.pdf" className="btn btn-warning">
              View Resume
            </a>
            <a href="#contact" className="btn btn-warning">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

*/
