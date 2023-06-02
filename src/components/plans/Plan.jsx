import React from "react";
import "./plan.css";
import vecter2 from "../../Vector2.png";

const Plan = () => {
  return (
    <>
      <div className="container-fluid  pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="heading-2">
                {/* <p>Plan & Pricing </p> */}
                <p> Paketi </p>
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
                    
                      <h2> PREMIUM </h2>
                    </div>
                    {/* <div className="vector-2 mt-2">
                      <img src={vecter2} alt="" />
                    </div> */}
                    <div className="para-5  mt-2">
            
                      <p> 50€</p>
                    </div>
                    <div className="para-3 mt-1">
               
                      <p>premium pickovi</p>
                    </div>
                    <div className="para-4 ">
                
                      <p>14 sporta</p>
                      <p>24 tipstera</p>
                    </div>
                  
                    {/* <div className="para-4">
                      <p>Per month</p>
                    </div>

                    <button className="btn-4 mt-3 " style={{ color: "white" }}>
                      Buy Standard
                    </button> */}
                  </div>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                  <div className="one ">
                    <div className="heading-3">
                      <h2>ALPHA</h2>
                    </div>
                    {/* <div className="vector-2 mt-2">
                      <img src={vecter2} alt="" />
                    </div> */}
                    <div className="para-5 mt-4">
                      <p>120€</p>
                    </div>
                    <div className="para-3 mt-3">
                      <p>alpha pickovi</p>
                    </div>
                    <div className="para-4 mt-4">
                      <p>
                      admin pickovi
                      </p>
                      <p>A.I pickovi</p>
                      <p>14 sporta</p>
                      <p>40 tipstera</p>
                    </div>
                    
                    {/* <div className="para-4">
                      <p>Per month</p>
                    </div>

                    <button className="btn-4" style={{ color: "white" }}>
                      
                      Buy Standard
                    </button> */}
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
