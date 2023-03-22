import { useContext, useEffect,useState } from 'react';
import '../Css/EventRight.css'

const EventLeft = ({ name, image, content }) => {
    let [Changeorder,SetChangeorder]=useState(true)

    useEffect(() => {
        console.log(window.innerWidth)
        if(window.innerWidth<=560)
        SetChangeorder(false)
      });
    return (
        <>
        <div className="eventName">
        <div className='text-white font-bold text-[4vw] text-center max-xs:text-xl'>{name}</div>
        
        </div>
        <div className='event'>
        {Changeorder &&
            <>
            <div className="eventDesc w-[40vw] min-w-[250px] text-[12px] md: text-[18px] lg:text-[28px]">
                {content}
            </div>
            <div className="eventImg">
                <img src={image} alt={name} className="EveImg"/>
            </div>
            
            </> 
        }
         {!Changeorder &&
            <>

            <div className="eventImg">
                <img src={image} alt={name} className="EveImg"/>
            </div>
            <div className="eventDesc w-[40vw] min-w-[250px] text-[12px] md: text-[18px] lg:text-[28px]">
                {content}
            </div>
            </> 
        }
        </div>
        
        </>
    )
};

export default EventLeft;