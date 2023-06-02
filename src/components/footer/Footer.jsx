import React from "react";
import "./footer.css";
import insta from "../../Instagram - Original.png";
import discord from "../../Discord - Original.png";
import google from "../../Google - Original.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center align-items-center footer-section">
            <div className="col-sm-4 d-flex gap-5">
              <div className="footer-text">
                <p className="mb-0">Privacy & Terms</p>
              </div>
              <div className="footer-text ">
                <p className="mb-0">Contact Us</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer-text-2 d-flex align-items-center">
                <p className="mb-0">

                  2023 SYNDICATE. All rights reserved
                </p>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="row">
                <div className="col contact">

                  <img src={insta} />
                </div>
                <div className="col contact">

                  <img src={discord} />
                </div>
                <div className="col contact">

                  <img src={google} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
