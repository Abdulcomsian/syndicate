import React from "react";
import "./plan.css";
import vecter2 from "../../Vector2.png";

const Plan = () => {
  return (
    <>
      <div className="container-fluid plan pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="heading-2">
                <p>Plan & Pricing </p>
              </div>
              <div className="para-2">
                <p>
                  Whether your time-saving automation needs are large or small,
                  we’re here to help you scale.
                </p>
              </div>

              <div className="row justify-content-center mt-4 plan-section">
                <div className="col-md-5 d-flex justify-content-center">
                  <div className="one ">
                    <div className="heading-3">
                      <h2>Explore</h2>
                    </div>
                    <div className="vector-2">
                      <img src={vecter2} alt="" />
                    </div>
                    <div className="para-3 mt-3">
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="para-4">
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Commodo ut ut in
                        nisi.
                      </p>
                    </div>
                    <div className="para-5 ms-2">
                      <p>$10</p>
                    </div>
                    <div className="para-4">
                      <p>Per month</p>
                    </div>

                    <button className="btn-4" style={{ color: "white" }}>
                      {" "}
                      Buy Standard{" "}
                    </button>
                  </div>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                  <div className="one ">
                    <div className="heading-3">
                      <h2>Explore</h2>
                    </div>
                    <div className="vector-2">
                      <img src={vecter2} alt="" />
                    </div>
                    <div className="para-3 mt-3">
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="para-4">
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Commodo ut ut in
                        nisi.
                      </p>
                    </div>
                    <div className="para-5">
                      <p>$10</p>
                    </div>
                    <div className="para-4">
                      <p>Per month</p>
                    </div>

                    <button className="btn-4" style={{ color: "white" }}>
                      {" "}
                      Buy Standard{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
