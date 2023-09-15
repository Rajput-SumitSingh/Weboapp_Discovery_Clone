import React from "react";
import "./header.css";
import headerImage from "../../assets/header_cover_image.jpg";

export default function Header() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={headerImage} className="d-block w-10" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3 className="text-danger">Weboapp Discovery Pvt Ltd</h3>
              <h6 className="text-primary">
                #206, Tricity Plaza, Peer Muchalla Zirakpur, Punjab, India –
                160104.
              </h6>
              <p>
                There are only three responses when it asked for the website -
                yes, no, and WOW! Wow is the one we aim for .....
                <br />
                you can scroll to check more about us .....
                <br />
                Once Again Thank You.....
              </p>
              <a href="#contact" className="btn btn-warning">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
