import React, { useState } from "react";
import "./cards.css";
import visa from "../../visa-logo.png";
import mastercard from "../../Mastercard.png";
import shape from "../../Shape.png";
import western from "../../Western Union Logo Vector 1.png";

const Cards = () => {

  return (
    <>
      <div className="container-fluid  pt-5 pb-5">
        <div className="container">
          <div className="row mt-4">
            <div className="cards-heading">
              <p>Metodi Plačanja</p>
            </div>
            <div className="card-para">
              <p>
                Lorem ipsum dolor sit amet consectetur. Ut elementum sit
                ultricies consectetur
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 gap-5 mb-5 plans-card">
            <div className="credit-card">
              {" "}
              <img src={visa} />{" "}
            </div>
            <div className="credit-card">
              {" "}
              <img src={mastercard} />{" "}
            </div>
            <div className="credit-card">
              {" "}
              <img src={shape} />{" "}
            </div>
            <div className="credit-card">
              {" "}
              <img src={western} />{" "}
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Cards;
