import React from 'react';
import './footer.css';
import insta from '../../Instagram - Original.png';
import discord from '../../Discord - Original.png';
import google from '../../Google - Original.png';

const Footer = () => {
  return (
    <>
        <div className="container-fluid footer">
            <div className="container">
                <div className="row d-flex justify-content-around">
                    <div className="col-3">
                        <div className="row mt-3">
                            <div className="col">
                                <div className="footer-text"> <p>Privacy & Terms</p> </div>
                                </div>
                            <div className="col">
                            <div className="footer-text "> <p>Contact Us</p> </div>
                            </div>
                        </div> 
                    </div>
                    <div className="col-4 mt-3">
                        <div className="footer-text-2"> <p> 2023 SYNDICATE. All rights reserved</p> </div>
                    </div>
                    <div className="col-2 mt-2">
                        <div className="row">
                            <div className="col"> <img src={insta}  /> </div>
                            <div className="col"> <img src={discord}  /> </div>
                            <div className="col"> <img src={google}  /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer