import React, { useRef } from "react";
import "./apply.css";
import emailjs from "@emailjs/browser";
import techImage from "../../../../assets/techimage.jpg";

export default function Apply() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l3f8g7n",
        "template_ftdms0a",
        form.current,
        "ETJYsXEgPRyBAN8Rr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };

  return (
    <section id="apply" className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12">
            <h1 className="text-center pt-5 text-danger">
              Apply <span className="text-success">Now</span>
            </h1>
            <div className="text-center">
              <span>
                Exciting Opportunity to Join Weboapp Discovery Pvt Ltd as a
                Valued Team Member. we're proud to offer an open position that
                could be the next step in your career journey. We believe your
                skills and experiences align perfectly with our company's values
                and goals.
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card">
            <div className="card-body">
              <div className="col-md-5 col-md-12 col-12 p-5">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Your Name :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Sumit kumar singh"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address :
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailId"
                      name="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Phone :
                    </label>
                    <input
                      type="number"
                      maxLength={10}
                      minLength={10}
                      className="form-control"
                      id="phoneNumber"
                      name="phone"
                      placeholder="9999999999"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Designation :</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      name="designation"
                    >
                      <option selected>Choose Once</option>
                      <option value="php">PHP Developer</option>
                      <option value="python">Python Developer</option>
                      <option value="zoho">ZOHO Developer</option>
                      <option value="Web">Web Developer</option>
                      <option value="java">Java Developer</option>
                      <option value="react">React Js Developer</option>
                      <option value="node">Node Js Developer</option>
                      <option value="hr manager">HR Manager</option>
                      <option value="android">Android Developer</option>
                      <option value="wordpress">WordPress Developer</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Additional Notes :
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={""}
                      name="notes"
                    />
                  </div>
                  <button
                    type="submit"
                    className=" form-control btn btn-primary"
                  >
                    {" "}
                    Apply Now{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
