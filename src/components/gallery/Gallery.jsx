import React, { useState } from 'react';
import './gallery.css';
import reactangle from '../../Rectangle 11853.png'



const active = {backgroundColor : "#10CA83"}

const Gallery = () => {

    const [ select , setSelect] = useState(0);

    const move = (divNum)=>()=>{
        setSelect(divNum)
    }




  return (
    <div className="container-fluid gallery pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col">
                <div className="gallery-heading">
                    <h2>Prošli tiketi</h2>
                </div>
                <div className="gallery-para">
                    <p>Lorem ipsum dolor sit amet consectetur. Ut elementum sit ultricies consectetur</p>
                </div>
                    
                </div>


            </div>
            
                <div className="text-center clickss">
                    <div className="links-one" style={select == 0 ? active : null} onClick={ move(0)} > <p className='mt-2'> Lorem, ipsum </p> </div>
                    <div className="links  " style={select == 1 ? active : null} onClick={move(1)} > <p className='mt-2'> Lorem, ipsum </p> </div>
                    <div className="links " style={select == 2 ? active : null } onClick={move(2)}> <p className='mt-2'> Lorem, ipsum </p> </div>
                    <div className="links  " style={select == 3 ? active : null} onClick={move(3)}> <p className='mt-2'> Lorem, ipsum </p> </div>
                    <div className="links-last" style={ select == 4 ? active : null} onClick={move(4)} > <p className='mt-2'> Lorem, ipsum </p> </div>
                     
            </div>

            <div className="container d-flex justify-contnet">
            <div className="row gallerys  mt-4  ">
                     <img  src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                     <img src={reactangle} alt="" /> 
                  
             </div>
            </div>
          



            

       
        </div>
    </div>
  )
}

export default Gallery