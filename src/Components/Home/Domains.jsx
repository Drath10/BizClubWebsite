import React from 'react'
import Carousel from './Carousel'
import DomainCont from './DomainCont'

const Domains = () => {
    const domains = ["Finance & Economics", "Product Management","Data Analytics", "Consulting",]
  return (
    <>
    <div className='w-full text-center 3xl:text-[90px] justify-center text-white font-bold text-[3vw] max-xs:text-xl'>
        <span>We Broadly focus on these <span className='text-[#D01919]'>domains:</span></span>
    </div>
    <div className='flex justify-center mt-8 max-md:mt-2'>
    <div className='grid grid-flow-col w-[65%] '>
        {
            domains.map((domain, index) => {
                return ( 
                        <DomainCont text={domain} key={index}/>
                )
            }
            )
    }
    </div>
    </div>
    <div className='mt-8 max-md:mt-4 '>
        <Carousel />
    </div>
    </>
  )
}

export default Domains