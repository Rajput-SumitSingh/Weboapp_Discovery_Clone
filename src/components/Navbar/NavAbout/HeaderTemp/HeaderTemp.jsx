import React from "react";
import "./about.css";
import { BsQuestionCircle } from "react-icons/bs";
import { GiTechnoHeart } from "react-icons/gi";
import { AiOutlineStock } from "react-icons/ai";

export default function HeaderTemp() {
  return (
    <>
      <section id="header-temp " className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card-title text-center mt-3">
                <div className="icon">
                  <BsQuestionCircle />
                </div>
                <h1>Who We Are !</h1>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <span>
                    We are India’s rising Web application, SASS and App
                    development company. We have a dedicated team of well
                    experienced developers for all our services. To know more
                    about our services. <a href="#">click here</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card-title text-center mt-3">
                <div className="icon">
                  <GiTechnoHeart />
                </div>
                <h1>Our Mission/Vision !</h1>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <span>
                    We promise to deliver top-notch digital solutions with
                    advanced tech-stack focusing on minute project details and
                    empower progressive organizations to change, scale and gain
                    upper hand through the proficient delivery of creative,
                    customized services.<a href="#">click here</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card-title text-center mt-3">
                <div className="icon">
                  <AiOutlineStock />
                </div>
                <h1> Our Values !</h1>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <span>
                    We keep building and keeping up long relationships with
                    individuals and technology alongside providing them with
                    incredible services.<a href="#">click here</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
