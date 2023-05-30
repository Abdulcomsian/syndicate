import React from 'react';
import './header.css';
import vector from '../../Vector.png';
import group from '../../Group 35.png';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
        <div className="container-fluid headers">
            <div className="container ">
            {/* <div className="row d-lg-flex">
                <div className="col-5 m-auto ">
                    <div className="heading">
                        <p>Lorem ipsum dolor sit <br /> amet consectetur.</p>
                    </div>
                    <div className="para"> <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, et id. </p> </div>

                    <button className='d-flex btns mt-5'>
                    <p className='mt-3' style={{color:"white"}}> Get Started  </p>
                    <div className="circle ms-2 mt-3"> <img className='vector' src={vector} />  </div> 
                    </button>

                
                </div>
                <div className="col-7 m-auto ">
                        <div className="image">
                            <img src={group}  />
                        </div>

                </div>
            </div> */}
            <div className="contents d-lg-flex justify-content-center">
                <div className="text m-auto ">
                <div className="heading">
                        <p>Lorem ipsum dolor sit <br /> amet consectetur.</p>
                    </div>
                    <div className="para"> <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, et id. </p> </div>
                    <button className='d-flex btns mt-5'>
                    <p className='mt-3' style={{color:"white"}}> Get Started  </p>
                    <span className="circle ms-2 mt-3"> <img className='vector' src={vector} />  </span> 
                    </button>
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