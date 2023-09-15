import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container contact-body">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="section-header text-center pb-5 p-4">
                <h2 className="text-danger">
                  <span className="text-primary">Contact</span> Us
                </h2>
                <p className="text-dark">
                  I believe your insights could be valuable in helping me make
                  an informed decision, so I would love to hear any suggestions
                  you may have.
                </p>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-12 p-0 pt-4 pb-4">
              <form action="#" className="p-4 m-auto">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="text"
                        required=""
                        placeholder="Enter your name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="email"
                        required=""
                        placeholder="Enter your email"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        cols={30}
                        rows={3}
                        placeholder="Enter your Query "
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <button className="btn btn-warning mt-3 btn-block btn-lg">
                    Submit Your Query
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
