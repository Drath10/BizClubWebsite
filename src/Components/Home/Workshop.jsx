import React from 'react'
import Scroll from '../Scroll'
import work from '../work.jsx'
const Workshop = () => {
  return (
    <div>
         <div className='text-white font-bold text-[4vw] text-center max-xs:text-xl mt-[9vh]'>Workshop<span className='text-[#D01919]'> Conducted</span></div>
         {/* <Scroll /> */}
         <work />
    </div>
  )
}

export default Workshop