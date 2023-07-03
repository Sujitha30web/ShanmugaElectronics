import React from 'react'
import './shop.css'

import Amp from '../../shopimages/amplifier.jpg';
import speaker from '../../shopimages/speaker.jpg'
import remote from '../../shopimages/remote.jpg';

// import Amp from '../../images/amplifier.png';
// import speaker from '../../images/speaker.png'
// import remote from '../../images/remote.png';
import tele from '../../images/tele.png';
import homet from '../../images/hometheatre.png';
import Fade from 'react-reveal/Fade';
const Shop = () => {
    return (
        <>
            <div className='out'>
                <div className='txt'>
                    <h2>SHOP BY ELECTRONICS</h2>
                </div>
                <Fade Left big>
                    <div className='img'>
                        <div className='img1'>
                            <img style={{width:"300px", height:"300px"}} src={Amp} />
                            <p>Amplifier</p>
                        </div>
                        <div className='img1'>
                            <img style={{width:"300px", height:"300px"}} src={speaker} />
                            <p>Speaker</p>
                        </div>
                        <div className='img1'>
                            <img style={{width:"300px", height:"300px"}} src={homet} />
                            <p>Home Theatre</p>
                        </div>
                        <div className='img1'>
                            <img style={{width:"300px", height:"300px"}} src={remote} />
                            <p>Gadgets</p>
                        </div>
                        <div className='img1'>
                            <img style={{width:"300px", height:"300px"}} src={tele} />
                            <p>Television</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </>
    )
}

export default Shop