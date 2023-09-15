import React from "react";
import "./hire.css";

export default function Hire() {
  return (
    <section id="vacancies" className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 col-log-12">
            <div className="card-title">
              <h2 className="text-center text-success">
                Would you like to start a project with us?
              </h2>
            </div>
            <div className="card-body text-center">
              <span>
                If yes, then you are at the right place. You can expect the
                highest standards of technical excellence and true
                professionalism from us.
                <br />
              </span>
              <div className="d-flex justify-content-center p-2">
                <button type="button" className=" btn btn-success">
                  <a
                    href="https://www.upwork.com/o/companies/~01b84844474be2310f/"
                    target="__blank"
                  >
                    {" "}
                    Hire Us{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
