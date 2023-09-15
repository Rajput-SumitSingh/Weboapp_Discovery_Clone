import React from "react";
import ERP from "../../../assets/erp.png";
import CRM from "../../../assets/crm.png";
import ECOM from "../../../assets/e-com.jpg";
import API from "../../../assets/api.png";
import EHS from "../../../assets/ehs.jpg";
import SERVER from "../../../assets/server.jpg";

export default function Services() {
  return (
    <section className="container p-5">
      <div className="row p-3">
        <div className="col-md-12 col-12">
          <h1 className="text-danger text-center">
            World Best <span className="text-primary">IT-Services</span>{" "}
            <span className="text-success"> We Provide</span>{" "}
          </h1>
        </div>
      </div>

      <div className="row p-3">
        <div className="col-md-4 col-12">
          <div className="card-img-top">
            <img src={ERP} alt="erp" className=" card-img-top image-square" />
          </div>
          <div className="card-body text-center">
            <h2 className="card-title text-center pt-2 pb-2">ERP</h2>
            <span>Apache Ofbiz, babyERP, Odoo, Moqui and Custom</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card-img-top">
            <img src={CRM} alt="crm" className=" card-img-top image-square" />
          </div>
          <div className="card-body text-center">
            <h2 className="card-title text-center pt-2 pb-2">CRM</h2>
            <span> Zoho, Hubspot, Salesforce and custom</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card-img-top">
            <img src={EHS} alt="erp" className=" card-img-top image-square" />
          </div>
          <div className="card-body text-center">
            <h2 className="card-title text-center pt-2 pb-2">EHS</h2>
            <span>QM plus and Custom</span>
          </div>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-md-4 col-12">
          <div className="card-img-top">
            <img src={ECOM} alt="ecom" className=" card-img-top image-square" />
          </div>
          <div className="card-body text-center">
            <h2 className="card-title text-center pt-2 pb-2">E-COM & OMS</h2>
            <span>Ofbiz, Magento, Shopify,Wordpress and custom</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card-img-top">
            <img src={API} alt="api" className=" card-img-top image-square" />
          </div>
          <div className="card-body text-center">
            <h2 className="card-title text-center pt-2 pb-2">
              API Dev Integration
            </h2>
            <span> Kafka, Zapier, Mulesoft, WSO2 and custom</span>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card-img-top">
            <img
              src={SERVER}
              alt="server"
              className=" card-img-top image-square"
            />
          </div>
          <div className="card-body text-center">
            <h2 className="card-title text-center pt-2 pb-2">
              Server Side Coding
            </h2>
            <span> Java, python, C#, node and others</span>
          </div>
        </div>
      </div>
    </section>
  );
}
