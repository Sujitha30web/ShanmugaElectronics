import React from 'react'
import amp1 from '../../shopimages/amp1.jpg'
import amp2 from '../../shopimages/amp2.jpg'
import amp3 from '../../shopimages/amp3.jpg'
import spk1 from '../../shopimages/spk1.jpg'
import spk2 from '../../shopimages/spk2.jpg'
import spk3 from '../../shopimages/spk3.jpg'
import ic1 from '../../shopimages/ic1.jpg'
import ic2 from '../../shopimages/ic2.jpg'
import ic3 from '../../shopimages/ic3.jpg'


import './gallery.css'
export default function Gallery() {
  return (
    <div>

      
    <div className='Parent'>
        <div className='name'><h3>AMPLIFIER</h3></div>
        <div className='child'>
        <img src={amp1} />
        <img src={amp2} />
        <img src={amp3} />        
        </div>
        
        <div className='name'><h3>SPEAKER</h3></div>
        <div className='child'>
        <img src={spk1} />
        <img src={spk2}/>
        <img src={spk3}/>   
        </div>  

          

        <div className='name'><h3>Integrated Circuit</h3></div>
        <div className='child'>
        <img src={ic1} />
        <img src={ic2}/>
        <img src={ic3}/>   
        </div>  -

        {/* <div className='name'><h3>BATTERY</h3></div>
        <div className='child'>
        <img src=''/>
        <img src=''/>
        <img src=''/>
        </div>  */}

        {/* <div className='name'><h3>CAMERA</h3></div>
        <div className='child'>
        <img src=''/>
        <img src=''/>
        <img src=''/>
        </div>  */}
    </div>
    

</div>
  )
}
