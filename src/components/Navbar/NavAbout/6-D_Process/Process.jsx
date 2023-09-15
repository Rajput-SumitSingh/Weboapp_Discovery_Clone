import React from "react";
import "./process.css";
import { PiNumberCircleOneDuotone } from "react-icons/pi";
import { PiNumberCircleTwoDuotone } from "react-icons/pi";
import { PiNumberCircleThreeDuotone } from "react-icons/pi";
import { PiNumberCircleFourDuotone } from "react-icons/pi";
import { PiNumberCircleFiveDuotone } from "react-icons/pi";
import { PiNumberCircleSixDuotone } from "react-icons/pi";
import { PiNumberOneBold } from "react-icons/pi";

export default function Process() {
  return (
    <>
      <section id="process">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="card-title text-center">
                <h2 className="text-danger">
                  Our 6-D <span className="text-success">Process</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-4 col-12">
              <div className="card-title text-center">
                <div className="icons">
                  <PiNumberCircleOneDuotone />
                </div>
                <h3>Planning and Analysis</h3>
                <span>
                  During this phase, our developer work with clients to
                  understand their needs and determine the best way to meet
                  those needs and create a software requirement specification or
                  SRS document according to those needs. This helps developer to
                  develop an effective outline for the upcoming development
                  cycle. And help to secure the funding and resources they need
                  to make their plan happen.
                </span>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card-title text-center">
                <div className="icons">
                  <PiNumberCircleTwoDuotone />
                </div>

                <h3>Define</h3>
                <span>
                  In this phase our developers will first outline the details
                  for the overall application and custom design a solution for
                  you. Generally, they will turn SRS document they created to
                  more logical structure that can later be implemented in a
                  programming language. Basically, we create a DFD (Data flow
                  diagram/design) for SDLC (Software development life cycle).
                </span>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card-title text-center">
                <div className="icons">
                  <PiNumberCircleThreeDuotone />
                </div>

                <h3>Develop</h3>
                <span>
                  In this phase, our developers actually write code and build
                  the application according to the earlier design documents and
                  outlined specifications. In theory, all of the prior planning
                  and outlined make the actual development phase relatively
                  straight forward.
                </span>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-4 col-12">
              <div className="card-title text-center">
                <div className="icons">
                  <PiNumberCircleFourDuotone />
                </div>
                <h3>Testing And Review</h3>
                <span>
                  Another crucial stage of development is testing. In this phase
                  our developers make sure that there aren’t any bugs and that
                  the end-user experience will not negatively be affected at any
                  point. And making sure that the software overall ends up
                  meeting the quality standards that were previously defined in
                  the SRS document.
                </span>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card-title text-center">
                <div className="icons">
                  <PiNumberCircleFiveDuotone />
                </div>

                <h3>Deploy</h3>
                <span>
                  This is where everything starts to get real for you, the
                  client. This phase usually involves transferring the code from
                  a development or staging server to a production server. The
                  steps involved in deployment which can vary depending on the
                  size and complexity of the project and may include tasks such
                  as configuring the environment, compressing files, setting up
                  caching, and load balancing.
                </span>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card-title text-center">
                <div className="icons">
                  <PiNumberCircleSixDuotone />
                </div>

                <h3>Maintenance</h3>
                <span>
                  Our work with you doesn’t end with deploy of your application.
                  We continuously focus on fixing of bugs to improve user
                  experience. We are responsible for implementing any changes
                  that the software might need after deployment.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
