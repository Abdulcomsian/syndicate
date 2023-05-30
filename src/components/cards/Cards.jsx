import React, { useState } from 'react';
import'./cards.css';
import visa from '../../visa-logo.png';
import mastercard from '../../Mastercard.png';
import shape from '../../Shape.png';
import western from '../../Western Union Logo Vector 1.png'

const Cards = () => {

        // const [cardss]= useState([
        //     {
        //         title: 'card-1',
        //         text : 'lorewm afas afsaf afasf',
        //         image : "visa"
        //     }
        // ])




  return (
    <>
        <div className="container-fluid cards pt-5 pb-5">

            <div className="container">
                <div className="row mt-4">
                    <div className="cards-heading">
                        <p>Metodi Plačanja</p>
                    </div>
                    <div className="card-para">
                        <p>Lorem ipsum dolor sit amet consectetur. Ut elementum sit ultricies consectetur</p>
                    </div>
                </div>

                <div className="row d-flex justify-content-around mt-3">
                    <div className="col-2 credit-card"> <img src={visa}  /> </div>
                    <div className="col-2 credit-card"> <img src={mastercard}  /> </div>
                    <div className="col-2 credit-card"> <img src={shape} /> </div>
                    <div className="col-2 credit-card"> <img src={western} /> </div>
                </div>



                {/* <div className="cardss">
                    <div className="cardd">
                        <h1> card-1 </h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <img src={visa} alt="" />
                    </div>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Cards