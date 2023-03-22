import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import img1 from '../../EventImages/DA.svg'
import img2 from '../../EventImages/FnE.svg'
import img3 from '../../EventImages/ProdMan.svg'
import img4 from '../../EventImages/Consult.svg'

const Carousel = () => {
  return (
    // <div class="splide" data-splide='{"type":"loop","wheel":"true"}' >
    
    <Splide aria-label="My Favorite Images" 
            data-splide='{"type":"loop","wheel":"true","waitForTransition":"true","wheelSleep":100}' 
            className=''>
    <SplideSlide className=''>
      <img src={img2} alt="Image 1" className=''/>
    </SplideSlide>
    <SplideSlide>
      <img src={img3} alt="Image 1"/>
    </SplideSlide>
    <SplideSlide>
      <img src={img1} alt="Image 1"/>
    </SplideSlide>
    <SplideSlide>
      <img src={img4} alt="Image 1"/>
    </SplideSlide>
    {/* <SplideSlide>
      <img src="image2.jpg" alt="Image 2"/>
    </SplideSlide> */}
  </Splide>
  // </div>
  )
}

export default Carousel