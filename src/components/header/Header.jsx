import React from 'react';
import './header.css';
import vector from '../../Vector.png';
import group from '../../Group 35.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
        <div className="container-fluid mb-5">
            <div className="container ">

            <div className="contents d-lg-flex justify-content-center">
                <div className="text m-auto ">
                <div className="heading">
                        <p>Lorem ipsum dolor sit <br /> amet consectetur.</p>
                    </div>
                    <div className="para"> <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, et id. </p> </div>
                   
                    <button className="btnd d-flex mt-5"> Get Started    <span className="circle ms-2"> <img className='vector' src={vector} />  </span>  </button>
                   
                </div>
                <div className="image m-auto">
                    <img src={group}  />
                </div>
            </div>

            </div>
          
        </div>
    </>
  )
}

export default Header