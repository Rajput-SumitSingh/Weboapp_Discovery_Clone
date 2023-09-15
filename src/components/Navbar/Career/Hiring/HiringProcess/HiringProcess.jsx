import React from "react";
import "./hiringprocess.css";
import { GrDocumentText } from "react-icons/gr";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";

export default function HiringProcess() {
  return (
    <section id="hiring_message" className="mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="section-header text-center pb-3">
              <h1 className="text-danger">
                {" "}
                Our Hiring <span className="text-success">Process</span>
              </h1>
              <span>If it’s Your Chance, give it your best shot</span>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-3 col-12">
            <div className="cv_shorting">
              <div className="row">
                <GrDocumentText style={{ fontSize: "5rem" }} />
                <h4 className="text-center pt-5">CV Shortlisting</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="cv_shorting">
              <div className="row">
                <BsPersonWorkspace style={{ fontSize: "5rem" }} />
                <h4 className="text-center pt-5">HR Screening</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="cv_shorting">
              <div className="row">
                <FaLaptopCode style={{ fontSize: "5rem" }} />
                <h4 className="text-center pt-5">Technical Round</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="cv_shorting">
              <div className="row">
                <FaRegIdCard style={{ fontSize: "5rem" }} />
                <h4 className="text-center pt-5">Final Interview</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
