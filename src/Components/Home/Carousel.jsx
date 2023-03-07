import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import img1 from '../../EventImages/1.svg'
import img2 from '../../EventImages/2.svg'

const Carousel = () => {
  return (
    <Splide aria-label="My Favorite Images" className=''>
    <SplideSlide className=''>
      <img src={img1} alt="Image 1" className=''/>
    </SplideSlide>
    <SplideSlide>
      <img src={img2} alt="Image 1"/>
    </SplideSlide>
    {/* <SplideSlide>
      <img src="image2.jpg" alt="Image 2"/>
    </SplideSlide> */}
  </Splide>
  )
}

export default Carousel