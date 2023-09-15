import React from "react";
import ankitArora from "../../assets/ankit_arora.jpg";
import ajaypratapsingh from "../../assets/ajay_pratap_singh.jpg";
import manshisharma from "../../assets/manshi.png";
import "./team.css";

export default function Team() {
  const styles = {
    width: "300px",
    height: "400px",
  };

  return (
    <>
      <section id="team">
        <div className="container">
          <div className="row">
            <div className="md-col-12 col-12">
              <div className="section-header text-center pb-5">
                <h2 className="text-danger">
                  <span className="text-primary">We Are</span> Workaholics
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
            <div className="col-md-12 col-12 col-lg-4">
              <div className="card text-center pb-2 why-card">
                <div className="card-body text-dark">
                  <div className="why-me-icon">
                    <i className="bi bi-cast" />
                  </div>
                  <div className="card-title">
                    <img src={ankitArora} alt="AnkitArora" style={styles}></img>
                    <h2>Ankit Arora</h2>
                    <span>Senior Software Developer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-12 col-lg-4">
              <div className="card text-center pb-2 why-card">
                <div className="card-body text-dark">
                  <div className="why-me-icon">
                    <i className="bi bi-code-slash" />
                  </div>
                  <div className="card-title">
                    <img
                      src={ajaypratapsingh}
                      alt="Ajay_pratap_singh"
                      style={styles}
                    ></img>
                    <h2>Ajay Pratap Singh</h2>
                    <span>Senior Zoho Developer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-12 col-lg-4">
              <div className="card text-center pb-2 why-card">
                <div className="card-body text-dark">
                  <div className="why-me-icon">
                    <i className="bi bi-star-fill" />
                  </div>
                  <div className="card-title">
                    <img
                      src={manshisharma}
                      alt="manshiMam"
                      style={styles}
                    ></img>
                    <h2>Manshi Sharma</h2>
                    <span>Senior Software Developer </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
