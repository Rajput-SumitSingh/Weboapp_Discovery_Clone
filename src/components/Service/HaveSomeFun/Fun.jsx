import React from "react";
import CLIENT from "../../../assets/clientside.jpg";
import FRONTEND from "../../../assets/frontend.jpg";
import DB from "../../../assets/database.jpg";
import QATEST from "../../../assets/qaandtest.jpg";
import DEPLOY from "../../../assets/deploy.jpg";
import CONSULT from "../../../assets/consulting.jpg";

export default function Fun() {
  return (
    <>
      <section id="#">
        <div className="container p-5">
          <div className="row p-3">
            <div className="col-md-12 col-12">
              <h2 className="text-center text-danger">
                Let's Have <span className="text-success"> Some Fun</span>
              </h2>
            </div>
          </div>

          <div className="row p-2">
            <div className="col-md-4 col-12">
              <div className="fun_image">
                <img src={CLIENT} alt="client" className="card-img-top" />
              </div>
              <div className="card-body text-center">
                <h3 className="p-3">Client Side Dev</h3>
                <span> JavaFX, android, IOS and others</span>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="fun_image">
                <img
                  src={FRONTEND}
                  alt="frontendDeveloper"
                  className="card-img-top"
                />
              </div>
              <div className="card-body text-center">
                <h3 className="p-3">Front End Dev</h3>
                <span>
                  {" "}
                  JS frameworks like React, Vue, Angular, ionic, react native,
                  HTML and CSS
                </span>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="fun_image">
                <img
                  src={DB}
                  alt="DataBases and Migration"
                  className="card-img-top"
                />
              </div>
              <div className="card-body text-center">
                <h3 className="p-3">DB and Migration</h3>
                <span>
                  {" "}
                  oracle, postgres, sql, mysql, mongoDB, plsql, sqlserver
                </span>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-md-4 col-12">
              <div className="fun_image">
                <img
                  src={QATEST}
                  alt="Question and answer"
                  className="card-img-top"
                />
              </div>
              <div className="card-body text-center">
                <h3 className="p-3">QA and Testing </h3>
                <span> manual, test scripts, automation, selenium, appium</span>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="fun_image">
                <img src={DEPLOY} alt="Deploy " className="card-img-top" />
              </div>
              <div className="card-body text-center">
                <h3 className="p-3">QA and Testing </h3>
                <span> docker, aws, azure</span>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="fun_image">
                <img src={CONSULT} alt="Consulting" className="card-img-top" />
              </div>
              <div className="card-body text-center">
                <h3 className="p-3">Consulting </h3>
                <span> architecture, design UI/UX, Project Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
