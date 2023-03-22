import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import img1 from '../../EventImages/DA.svg'
import img2 from '../../EventImages/FnE.svg'
import img3 from '../../EventImages/ProdMan.svg'
import img4 from '../../EventImages/Consult.svg'
import prod from '../../EventImages/ProdBreak.png'

const Achievements = () => {
  
  return (
    <div>
        <div className='text-white font-bold text-[3vw] text-center max-xs:text-xl'>Our <span className='text-[#D01919]'>Achievements</span></div>
        <div class="flex justify-center mt-[5vh] items-center">
            <div class="text-[4vw] flex flex-wrap justify-center mr-[5vw] w-[20vw] border-white border-[2px] rounded-[10px]"> 
            
                <h1 className='w-[100%] text-center'>12</h1> 
                <h2>Number of </h2>
                <h2>medals</h2>
            
            </div>
            <div class= "box-border flex justify-center h-[300px] w-[40vw]">
            <Splide aria-label="My Favorite Images" 
            data-splide='{"type":"loop","wheel":"true","waitForTransition":"true","wheelSleep":100,"autoplay":"pause"}'
            options={{
                heightRatio : 2,
                height:300,
            }}
            //data-splide-interval="100" 
            className=''>
            <SplideSlide>
            {/* <div className="flex justify-center items-center h-[100%] w-[100%]"> */}
            
              <img src={prod} alt="Image 1"/>
              
            {/* </div> */}
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
            </div>
        </div>

    </div>
  )
}

export default Achievements