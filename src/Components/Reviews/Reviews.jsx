import React from 'react'
import q from '../../images/q.svg'
import './reviews.css'
import Fade from 'react-reveal/Fade';
const Reviews = () => {
    return (
        <Fade left>
            <div className='reviews'>
                <div className='cc'>
                    <h2>CUSTOMER REVIEWS</h2>
                </div>
                <div className='rr'>
                    <div className='card'>
                        <div>
                            <img src={q} />
                        </div>
                        <div>
                            <p>Ordered a Roberts radio from this website at a good price . Communication was superb, they went out of their way to help me . I would recommend this site. </p>
                        </div>
                        <div>
                            <p>- Prasanth D</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src={q} />
                        </div>
                        <div>
                            <p>Having experienced excellent customer service when I purchased a Sony Bravia TV from Shanmuga Electronics, I was happy to consider them again.</p>
                        </div>
                        <div>
                            <p>- Sujitha R</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src={q} />
                        </div>
                        <div>
                            <p>Orderd a Samsung HW Q990B Q Symphony 11 1.4ch Cinematic Dolby Atmos Wi Fi Soundbar was £100 cheaper then other sites. I would highly recommend this shop for purchase.</p>
                        </div>
                        <div>
                            <p>- Mukilan N</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>

    )
}

export default Reviews