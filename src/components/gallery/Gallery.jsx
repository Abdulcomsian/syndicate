import React, { useState } from 'react';
import './gallery.css';

//premium portion

import shoot2 from '../../assets/premium/Screenshot_2.jpg'
import shoot3 from '../../assets/premium/Screenshot_3.jpg'
import shoot4 from '../../assets/premium/Screenshot_4.jpg'
import shoot5 from '../../assets/premium/Screenshot_5.jpg'
import shoot6 from '../../assets/premium/Screenshot_6.jpg'
import shoot7 from '../../assets/premium/Screenshot_7.jpg'
import shoot8 from '../../assets/premium/Screenshot_8.jpg'
import shoot9 from '../../assets/premium/Screenshot_9.jpg'
import shoot10 from '../../assets/premium/Screenshot_10.jpg'


import shoot11 from '../../assets/premium/Screenshot_11.jpg'
import shoot12 from '../../assets/premium/Screenshot_12.jpg'
import shoot25 from '../../assets/premium/Screenshot_25.jpg'
import shoot32 from '../../assets/premium/Screenshot_32.jpg'
import shoot37 from '../../assets/premium/Screenshot_37.jpg'
import shoot38 from '../../assets/premium/Screenshot_38.jpg'
import shoot39 from '../../assets/premium/Screenshot_39.jpg'
import shoot40 from '../../assets/premium/Screenshot_40.jpg'
import shoot41 from '../../assets/premium/Screenshot_41.jpg'


import shoot42 from '../../assets/premium/Screenshot_42.jpg'
import shoot43 from '../../assets/premium/Screenshot_43.jpg'
import shoot44 from '../../assets/premium/Screenshot_44.jpg'
import shoot46 from '../../assets/premium/Screenshot_46.jpg'
import shoot47 from '../../assets/premium/Screenshot_47.jpg'
import shoot48 from '../../assets/premium/Screenshot_48.jpg'
import shoot49 from '../../assets/premium/Screenshot_49.jpg'
import shoot50 from '../../assets/premium/Screenshot_50.jpg'
import shoot52 from '../../assets/premium/Screenshot_52.jpg'


import shoot60 from '../../assets/premium/Screenshot_60.jpg'
import shoot61 from '../../assets/premium/Screenshot_61.jpg'
import shoot62 from '../../assets/premium/Screenshot_62.jpg'
import shoot63 from '../../assets/premium/Screenshot_63.jpg'
import shoot64 from '../../assets/premium/Screenshot_64.jpg'
import shoot65 from '../../assets/premium/Screenshot_65.jpg'
import shoot67 from '../../assets/premium/Screenshot_67.jpg'
import shoot68 from '../../assets/premium/Screenshot_68.jpg'
import shoot76 from '../../assets/premium/Screenshot_76.jpg'


import shoot79 from '../../assets/premium/Screenshot_79.jpg'
import shoot80 from '../../assets/premium/Screenshot_80.jpg'
import shoot82 from '../../assets/premium/Screenshot_82.jpg'
import shoot83 from '../../assets/premium/Screenshot_83.jpg'
import shoot84 from '../../assets/premium/Screenshot_84.jpg'
import shoot85 from '../../assets/premium/Screenshot_85.jpg'
import shoot86 from '../../assets/premium/Screenshot_86.jpg'
import shoot87 from '../../assets/premium/Screenshot_87.jpg'
import shoot89 from '../../assets/premium/Screenshot_89.jpg'


import shoot90 from '../../assets/premium/Screenshot_90.jpg'
import shoot91 from '../../assets/premium/Screenshot_91.jpg'
import shoot92 from '../../assets/premium/Screenshot_92.jpg'
import shoot93 from '../../assets/premium/Screenshot_93.jpg'
import shoot95 from '../../assets/premium/Screenshot_95.jpg'
import shoot96 from '../../assets/premium/Screenshot_96.jpg'
import shoot98 from '../../assets/premium/Screenshot_98.jpg'
import shoot111 from '../../assets/premium/Screenshot_111.jpg'




//alpha portio
import shoot1 from '../../assets/alpha/Screenshot_1.jpg';
import shoot13 from '../../assets/alpha/Screenshot_13.jpg';
import shoot14 from '../../assets/alpha/Screenshot_14.jpg';
import shoot15 from '../../assets/alpha/Screenshot_15.jpg';
import shoot16 from '../../assets/alpha/Screenshot_16.jpg';
import shoot17 from '../../assets/alpha/Screenshot_17.jpg';
import shoot18 from '../../assets/alpha/Screenshot_18.jpg';
import shoot19 from '../../assets/alpha/Screenshot_19.jpg';
import shoot20 from '../../assets/alpha/Screenshot_20.jpg';

import shoot21 from '../../assets/alpha/Screenshot_21.jpg';
import shoot22 from '../../assets/alpha/Screenshot_22.jpg';
import shoot23 from '../../assets/alpha/Screenshot_23.jpg';
import shoot24 from '../../assets/alpha/Screenshot_24.jpg';
import shoot26 from '../../assets/alpha/Screenshot_26.jpg';
import shoot27 from '../../assets/alpha/Screenshot_27.jpg';
import shoot28 from '../../assets/alpha/Screenshot_28.jpg';
import shoot29 from '../../assets/alpha/Screenshot_29.jpg';
import shoot30 from '../../assets/alpha/Screenshot_30.jpg';

import shoot31 from '../../assets/alpha/Screenshot_31.jpg';
import shoot33 from '../../assets/alpha/Screenshot_33.jpg';
import shoot34 from '../../assets/alpha/Screenshot_34.jpg';
import shoot35 from '../../assets/alpha/Screenshot_35.jpg';
import shoot36 from '../../assets/alpha/Screenshot_36.jpg';
import shoot45 from '../../assets/alpha/Screenshot_45.jpg';
import shoot51 from '../../assets/alpha/Screenshot_51.jpg';
import shoot53 from '../../assets/alpha/Screenshot_53.jpg';
import shoot54 from '../../assets/alpha/Screenshot_54.jpg';



import shoot55 from '../../assets/alpha/Screenshot_55.jpg';
import shoot56 from '../../assets/alpha/Screenshot_56.jpg';
import shoot57 from '../../assets/alpha/Screenshot_57.jpg';
import shoot58 from '../../assets/alpha/Screenshot_58.jpg';
import shoot59 from '../../assets/alpha/Screenshot_59.jpg';
import shoot66 from '../../assets/alpha/Screenshot_66.jpg';
import shoot69 from '../../assets/alpha/Screenshot_69.jpg';
import shoot70 from '../../assets/alpha/Screenshot_70.jpg';
import shoot71 from '../../assets/alpha/Screenshot_71.jpg';


import shoot72 from '../../assets/alpha/Screenshot_72.jpg';
import shoot73 from '../../assets/alpha/Screenshot_73.jpg';
import shoot74 from '../../assets/alpha/Screenshot_74.jpg';
import shoot75 from '../../assets/alpha/Screenshot_75.jpg';
import shoot77 from '../../assets/alpha/Screenshot_77.jpg';
import shoot78 from '../../assets/alpha/Screenshot_78.jpg';
import shoot81 from '../../assets/alpha/Screenshot_81.jpg';
import shoot88 from '../../assets/alpha/Screenshot_88.jpg';
import shoot94 from '../../assets/alpha/Screenshot_94.jpg';



import shoot97 from '../../assets/alpha/Screenshot_97.jpg';
import shoot99 from '../../assets/alpha/Screenshot_99.jpg';
import shoot100 from '../../assets/alpha/Screenshot_100.jpg';
import shoot101 from '../../assets/alpha/Screenshot_101.jpg';
import shoot102 from '../../assets/alpha/Screenshot_102.jpg';
import shoot103 from '../../assets/alpha/Screenshot_103.jpg';
import shoot104 from '../../assets/alpha/Screenshot_104.jpg';
import shoot105 from '../../assets/alpha/Screenshot_105.jpg';
import shoot106 from '../../assets/alpha/Screenshot_106.jpg';


import shoot107 from '../../assets/alpha/Screenshot_107.jpg';
import shoot108 from '../../assets/alpha/Screenshot_108.jpg';
import shoot109 from '../../assets/alpha/Screenshot_109.jpg';
import shoot110 from '../../assets/alpha/Screenshot_110.jpg';




const Gallery = () => {


    const [option, setOption] = useState('1');


    return (
        <div className="container-fluid  pt-5 pb-5">
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


                    <div className={`links-one ${option === '1' ? 'selected' : ''}`} onClick={(e) => setOption('1')} >
                        <p className=' mt-3' > PREMIUM TICKETI </p>
                    </div>

                    <div className={`links-last ${option === '2' ? 'selected' : ''}`} onClick={(e) => setOption('2')} >
                        <p className='mt-3'> ALPHA TIKETI </p>


                    </div>


                </div>

                {/* //premium portion */}

                {option === '1' &&


                    <div className="premium">

                        <div className="d-flex justify-content-center mt-3 gap-1  gallery-card">
                            <div className="alpha-logo">
                                <img src={shoot2} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot3} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot4} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot5} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot6} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot7} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot8} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot9} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot10} />
                            </div>
                        </div>


                        <div className="d-flex justify-content-center mt-1 gap-1   gallery-card">
                            <div className="alpha-logo">
                                <img src={shoot11} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot12} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot25} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot32} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot37} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot38} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot39} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot40} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot41} />
                            </div>
                        </div>


                        <div className="d-flex justify-content-center mt-1 gap-1   gallery-card">
                            <div className="alpha-logo">
                                <img src={shoot42} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot43} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot44} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot46} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot47} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot48} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot49} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot50} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot52} />
                            </div>
                        </div>





                        <div className="d-flex justify-content-center mt-1 gap-1   gallery-card">
                            <div className="alpha-logo">
                                <img src={shoot60} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot61} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot62} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot63} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot64} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot65} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot67} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot68} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot76} />
                            </div>
                        </div>


                        <div className="d-flex justify-content-center mt-1 gap-1  gallery-card">
                            <div className="alpha-logo">
                                <img src={shoot79} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot80} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot82} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot83} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot84} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot85} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot86} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot87} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot89} />
                            </div>
                        </div>


                        <div className="d-flex justify-content-center mt-1 gap-1   gallery-card">
                            <div className="alpha-logo">
                                <img src={shoot90} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot91} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot92} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot93} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot95} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot96} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot98} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot111} />
                            </div>

                        </div>






                    </div>




                }

                {/* //alpha portion */}



                {option === '2' &&
                    <div className="alpha ">


                        <div className="d-flex justify-content-center mt-3 gap-1   gallery-card">
                            <div className="alpha-logo">
                                <img src={shoot1} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot13} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot14} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot15} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot16} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot17} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot18} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot19} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot20} />
                            </div>
                        </div>


                        <div className="d-flex justify-content-center mt-1 gap-1   gallery-card">
                            <div className="alpha-logo">
                                <img src={shoot21} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot22} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot23} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot24} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot26} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot27} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot28} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot29} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot30} />
                            </div>

                        </div>

                        <div className="d-flex justify-content-center mt-1 gap-1  gallery-card">
                            <div className="alpha-logo">
                                <img src={shoot31} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot33} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot34} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot35} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot36} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot45} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot51} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot53} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot54} />
                            </div>

                        </div>



                        <div className="d-flex justify-content-center mt-1 gap-1  gallery-card">
                            <div className="alpha-logo">
                                <img src={shoot55} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot56} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot57} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot58} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot59} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot66} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot69} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot70} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot71} />
                            </div>

                        </div>



                        <div className="d-flex justify-content-center mt-1 gap-1   gallery-card">
                            <div className="alpha-logo">
                                <img src={shoot72} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot73} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot74} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot75} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot77} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot78} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot81} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot88} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot94} />
                            </div>

                        </div>


                        <div className="d-flex justify-content-center mt-1 gap-1  gallery-card">
                            <div className="alpha-logo">
                                <img src={shoot97} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot99} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot100} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot101} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot102} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot103} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot104} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot105} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot106} />
                            </div>

                        </div>






                        <div className="d-flex justify-content-center mt-1 gap-1   gallery-card">
                            <div className="alpha-logo">
                                <img src={shoot107} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot108} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot109} />
                            </div>
                            <div className="alpha-logo">
                                <img src={shoot110} />
                            </div>


                        </div>



                    </div>

                }




















                {/* <div className="container d-flex justify-contnet">
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
            </div> */}







            </div>
        </div>
    )
}

export default Gallery