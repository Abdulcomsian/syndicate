import React from 'react';
import './companies.css';
import frame from '../../Frame 3937.png';
import visa from "../../visa-logo.png";
import xbet from '../../assets/1xbet.png';
import bet from '../../assets/bet365.png';
import betwayl from '../../assets/betwayl.png';
import csgo from '../../assets/csgoempire.png';
import duel from '../../assets/duelbitslogo.png';
import maxbet from '../../assets/maxbet.png';
import meri from '../../assets/meridianbet.jpg'
import moz from '../../assets/mozzart.png'
import pin from '../../assets/Pinnacle_Logo.jpeg'
import piwi from '../../assets/piwi247.png'
import ps3 from '../../assets/ps3838.png'
import roll from '../../assets/rollbit.png'
import robit from '../../assets/roobet.png'
import sport from '../../assets/sportlife.png'
import stac from '../../assets/stakel.jpg'
import stacklogo from '../../assets/stakelogo.png'
import thunder from '../../assets/thunderpicklogo.jpg'
import unibet from '../../assets/unibet.png'
import willhill from '../../assets/willhill.png'

const Companies = () => {
  return (
    <>

      <div className="container-fluid  pt-5 pb-5">
        <div className="container">
          <div className="row mt-4">
            <div className="cards-heading">
              <p>Kladionice</p>
            </div>
            <div className="card-para">
              {/* <p>
                Lorem ipsum dolor sit amet consectetur. Ut elementum sit
                ultricies consectetur
              </p> */}
              <p>Ovo su kladionice koje koristim najčesče</p>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 gap-3  plans-card">
            <div className="comp-logo">

              <img src={xbet} />
            </div>
            <div className="comp-logo">

              <img src={bet} />
            </div>
            <div className="comp-logo">

              <img src={betwayl} />
            </div>
            <div className="comp-logo">

              <img src={csgo} />
            </div>
            <div className="comp-logo">

              <img src={duel} />
            </div>

          </div>


          <div className="d-flex justify-content-center mt-2 gap-3  plans-card">
            <div className="comp-logo">

              <img src={maxbet} />
            </div>
            <div className="comp-logo">

              <img src={meri} />
            </div>
            <div className="comp-logo">

              <img src={moz} />
            </div>
            <div className="comp-logo">

              <img src={pin} />
            </div>
            <div className="comp-logo">

              <img src={piwi} />
            </div>

          </div>



          <div className="d-flex justify-content-center mt-2 gap-3  plans-card">
            <div className="comp-logo">

              <img src={ps3} />
            </div>
            <div className="comp-logo">

              <img src={roll} />
            </div>
            <div className="comp-logo">

              <img src={robit} />
            </div>
            <div className="comp-logo">

              <img src={sport} />
            </div>
            <div className="comp-logo">

              <img src={stac} />
            </div>

          </div>




          <div className="d-flex justify-content-center mt-2 gap-3  plans-card">
            <div className="comp-logo">

              <img src={stacklogo} />
            </div>
            <div className="comp-logo">

              <img src={thunder} />
            </div>
            <div className="comp-logo">

              <img src={unibet} />
            </div>
            <div className="comp-logo">

              <img src={willhill} />
            </div>


          </div>




        </div>
      </div>
    </>
  )
}

export default Companies