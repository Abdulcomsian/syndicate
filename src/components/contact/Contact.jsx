import React from 'react';
import './contact.css';
import xbet from '../../assets/1xbet.png'
import insta from '../../assets/instagram-1-svgrepo-com.svg'
import discord from '../../assets/discord-icon-svgrepo-com.svg'

const Contact = () => {
  return (
    <>
        <div className="container-fluid  pt-5 pb-5">
        <div className="container">
          <div className="row mt-4">
            <div className="contact-heading">
              <p>Kontakt</p>
            </div>

          </div>

          <div className="d-flex justify-content-center mt-3 gap-3  contacts-ivan">
            <div className="contact-logo text-center">

              <img src={insta} />
              <p className='name mt-1'> Ivan </p>
            </div>
            <div className="contact-logo text-center">

              <img src={insta} />
              <p className='name mt-1'> Ivan </p>
            </div>
            <div className="contact-logo text-center">

              <img src={discord} />
              <p className='name mt-1'> Ivan </p>
            </div>


          </div>



        </div>
      </div>
    </>
  )
}

export default Contact