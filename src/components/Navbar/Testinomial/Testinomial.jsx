import React, { useEffect, useState } from "react";
import "./testinomial.css";

export default function Testinomial() {
  const [clientCount, clientSetCount] = useState(0);
  const [projectCount, projectSetCount] = useState(0);
  const [ecoldesCount, setEcoldesCount] = useState(0);
  const [codeCount, setCodeCount] = useState(0);

  useEffect(() => {
    const ClientmaxIncrements = 80;
    const ClientincrementInterval = 70; // 1000 ms = 1 second
    let currentCount = 0;
    const interval = setInterval(() => {
      if (currentCount < ClientmaxIncrements) {
        clientSetCount((prevCount) => prevCount + 1);
        currentCount++;
      } else {
        clearInterval(interval);
      }
    }, ClientincrementInterval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const projectMaxIncrements = 150;
    const projectIncreInterval = 50;
    let currentCount = 0;
    const interval = setInterval(() => {
      if (currentCount < projectMaxIncrements) {
        projectSetCount((prev) => prev + 1);
        currentCount++;
      } else {
        clearInterval(interval);
      }
    }, projectIncreInterval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ecoldesMaxIncrement = 30;
    const ecoldesIncrInterval = 70;
    let currentCount = 0;
    const interval = setInterval(() => {
      if (currentCount < ecoldesMaxIncrement) {
        setEcoldesCount((prev) => prev + 1);
        currentCount++;
      } else {
        clearInterval(interval);
      }
    }, ecoldesIncrInterval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const codeMaxIncrement = 60;
    const codeIncrInterval = 40;
    let currentCount = 0;
    const interval = setInterval(() => {
      if (currentCount < codeMaxIncrement) {
        setCodeCount((prev) => prev + 1);
        currentCount++;
      } else {
        clearInterval(interval);
      }
    }, codeIncrInterval);
  }, []);

  return (
    <section id="testinomial" className="bg-white p-5">
      <div className="container">
        <div className="row ml-5">
          <div className="col-md-3 col-12">
            <div className="text-center">
              <span className="text-success">
                <h1 className="text-danger">{clientCount}+</h1> Satisfied Client{" "}
              </span>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="text-center">
              <span className="text-success">
                <h1 className="text-danger">{projectCount}+</h1> Project
                Completed{" "}
              </span>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="text-center">
              <span className="text-success">
                <h1 className="text-danger">{ecoldesCount}+</h1> Accolades
                Earned{" "}
              </span>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="text-center">
              <span className="text-success">
                <h1 className="text-danger">{codeCount}K+</h1> Lines of code{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
