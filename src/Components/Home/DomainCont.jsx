import React from 'react'

const DomainCont = ({text,currentIndex, setCurrentIndex,index}) => {
  return (
    <div className={`bg-[#171717] rounded-2xl ${(index==currentIndex) ?'text-[white]' : 'text-[grey]'} font-bold text-[2.5vw]  py-1 text-center w-min flex items-center px-3`} onClick={()=>{setCurrentIndex(index);console.log(index)}}>
        {text}
    </div>
  )
}

export default DomainCont