import React from "react";
import pravinSainiImage from "../../assets/pravin_saini.png";
import vedanshusinghImage from "../../assets/vedanshu_sir.png";
import "./about.css";

export default function About() {
  const styles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  };

  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="md-col-12 col-12">
              <div className="section-header text-center pb-5">
                <h2 className="text-danger">
                  <span className="text-primary">About Our</span> Company
                </h2>
                <p>
                  Weboapp Discovery Pvt. Ltd. was founded by Mr. Parveen Saini
                  and the co-founder Mr. Vedanshu in March 2021. We are the
                  top-notch IT Company that is your one-stop technology partner,
                  who’d like to take full responsibility for converting your
                  boldest technical challenges into end-to-end solutions. We
                  offer the best quality services and business IT solutions for
                  customers across the globe. We offer moderate yet solid
                  administrations including advancement, planning, and support
                  of Websites and Mobile Apps. We are your one-stop technology
                  partner who’d like to take full responsibility for converting
                  your boldest technical challenges into end-to-end solutions.
                  Our Organization is having experience and mastery in Zoho
                  Apps, Website Design and Web Development, Mobile Apps,
                  Solution Designing and Development, Database Designing, Custom
                  Software, and Product Development. We have a team of devoted
                  Zoho Professionals who are focused on greatness. We create
                  On-Demand Zoho Apps for Start-ups and Enterprise. We generally
                  remember the client’s intended interest group while creating
                  Zoho CRM Services. No need to worry when we are here with
                  solutions for all your problems.
                </p>
              </div>
            </div>
          </div>

          <div className="row pb-5">
            <div className="col-md-6 col-12 text-center">
              <img src={pravinSainiImage} alt="pravin_saini" style={styles} />
              <div className="text-center">
                <h5>Mr. Pravin Saini </h5>
                <span className="text-primary">Founder</span>
              </div>
            </div>
            <div className="col-md-6 col-12 text-center">
              <img src={vedanshusinghImage} alt="pravin_saini" style={styles} />
              <br />
              <div className="text-center">
                <h5>Mr. Vedanshu Singh</h5>
                <span className="text-primary">Director</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
