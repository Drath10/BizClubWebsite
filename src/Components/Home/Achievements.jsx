import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useRef } from 'react';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import img1 from '../../EventImages/DA.svg'
import img2 from '../../EventImages/FnE.svg'
import img3 from '../../EventImages/ProdMan.svg'
import img4 from '../../EventImages/Consult.svg'
import prod from '../../EventImages/ProdBreak.png'
import { useState } from 'react';

const Achievements = () => {
  const arr = [
    "madhav1","Madhav2","madhav3","monty"
  ]
  // console.log(arr[1])
  const [text,setText] = useState(arr[0])
  const handleMove = (splide) => {
    setText(arr[splide.index])
    console.log(splide.index)
  }
  return (
    <div>
        <div className='text-white font-bold text-[4vw] text-center max-xs:text-xl mt-[7vh]'>Our <span className='text-[#D01919]'>Achievements</span></div>
        <div class="flex justify-center mt-[5vh] items-center">
            <div class="text-[4vw] flex flex-wrap justify-center mr-[5vw] w-[20vw] border-white border-[2px] rounded-[10px]"> 
            
                {/* <h1 className='w-[100%] text-center'>12</h1> 
                <h2>Number of </h2>
                <h2>medals</h2> */}
                <h1>{text}</h1>
            
            </div>
            <div class= "box-border flex justify-center h-[300px] w-[40vw]">
            <Splide aria-label="My Favorite Images" 
            onMove={handleMove}
            data-splide='{"type":"loop","wheelSleep":100,"autoplay":"pause"}'
            options={{
                heightRatio : 2,
                height:300,
                autoplay:true
            }}
            //data-splide-interval="100" 
            className=''>
            <SplideSlide className='flex flex-row items-center justify-center'>
            {/* <div className="flex justify-center items-center h-[100%] w-[100%]"> */}
            
              <img src={prod} alt="Image 1"/>
              
            {/* </div> */}
            </SplideSlide>
            <SplideSlide className='flex flex-row items-center justify-center'>
            <img src={img3} alt="Image 1"/>
            </SplideSlide>
            <SplideSlide className='flex flex-row items-center justify-center'>
            <img src={img1} alt="Image 1"/>
            </SplideSlide>
            <SplideSlide className='flex flex-row items-center justify-center'>
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