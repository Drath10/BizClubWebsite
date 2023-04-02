
import '../Css/EventRight.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Link} from "react-router-dom"
import { SocialIcon } from "react-social-icons";
import { AiTwotoneHeart } from "react-icons/ai";
import { useContext, useEffect,useState } from 'react';
const EventLeft = ({ name, image, content, link }) => {
    const [x, set1] = useState(window.innerWidth/36);
    

    return (
        <>
        <div className="eventName">
        <div className='text-white font-bold text-[4vw] max-xs:text-xl mb-[1vh]'>
        <a href={link} target="_blank" rel="noopener noreferrer" className='eve-link'>
            {name}
        </a>
        
        </div>
        
        </div>
        <div className='event'>

        
            
            <div className="eventImg">
            <a href={link} target="_blank" rel="noopener noreferrer">

             <img src={image} alt={name} className="EveImg"/>
            </a>
            </div>
            <div className="eventDesc w-[40vw] min-w-[250px] text-[12px] md: text-[18px] lg:text-[28px] flex flex-col">
                {content}
                {/* <div className=" flex flex-1 mt-[5%] ml-[85%] content-end" id="footericons">
          <div className="flex self-center align-middle">
            <SocialIcon id="icon"
              url="https://www.instagram.com/businessclub_iitbhu"
              bgColor="#ffff"
              target="_blank"
              className="hover:scale-105 ease-in-out duration-300"
              style={{ height: x, width: x }}
            />
          </div>
          <div className=" flex">
            <SocialIcon
              url="https://www.linkedin.com/mwlite/company/businessclubiitbhu"
              bgColor="#ffff"
              target="_blank"
              className="hover:scale-105 ease-in-out duration-300"
              style={{ height: x, width: x }}
            />
          </div>
          </div> */}
            </div>
            
        
         


        </div>
        </>
    )
};

export default EventLeft;