import React from "react";
import MohitK from "../../../assets/hirethebestimage.png";
import hireImage01 from "../../../assets/hireImage01.png";
import hireImage02 from "../../../assets/hireImage02.png";

export default function BestHire() {
  const styles = {
    width: "600px",
  };
  return (
    <>
      <section id="hirethebest" className=" p-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12">
              <div className="card-title">
                <h2 className="text-danger text-center">
                  Hire The <span className="text-success p-3"> Best !</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-12">
              <div className="text-heading">
                <h6 className="text-success">
                  Certified ZOHO One Expert | CRM | Creator | Campaign and
                  MarketingHub
                </h6>
              </div>
              <div className="text-about">
                <span>
                  We love opensource technologies along with many popular
                  proptietery software. We choose to keep costs down, You got to
                  understand that cheap does not have to be crap. Infact the
                  best things are usually free in this world…
                </span>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="text-heading">
                <h6 className="text-success">
                  We have constantly received 5 star reviews for past 5 years on
                  "Upwork", our favorite online platform!
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
