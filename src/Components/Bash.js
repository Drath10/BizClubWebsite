import '../Css/Bash.css'
import eve1 from '../EventImages/madhavendra.png'
import Scroll from './Scroll';
import EventLeft from "./EventLeft"
import EventRight from "./EventRight"
import Gallery from "./Gallery"
import GalleryImages from "./GalleryImages"
import Madhavendra from "../EventImages/madhavendra.png"
import party from "../EventImages/partyima.jpeg"
const Bash = () => {
    return (
        <>
        <div className="BashHeader">
       
        <div className="title">
            B.A.S.H
        </div>
        <div className="subtitle">
            <span className="firstLetter"> B</span>usiness   
            <span className="firstLetter"> A</span>ssociates   
            <span className="firstLetter"> S</span>pecial   
            <span className="firstLetter"> H</span>ours  
        </div>
        <div className="content">
        Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc. Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc.
        </div>
        
        <div className="Scrollbar"></div>
        </div>
        <div className="BashEvents mt-8">
        <div className='text-white font-bold text-[3vw] text-center max-xs:text-xl'>Workshop<span className='text-[#D01919]'> Conducted</span></div>
            <Scroll />
        </div>
        <div className='w-[99vw] flex items-center justify-center'>
         <div className='coming w-[35%]  text-center py-4 px-8 text-[5vw] font-bold ' style={{borderRadius:"20px"}}>
            Coming Soon
         </div>
        </div>
      {/* <ParticleBackground />  */}
            {/* <div className="flex flex-wrap justify-center items-center">
                <div className="w-[30vw] min-w-[300px]">
                <img src={eve1} className="w-[100%] "></img>
                </div> 
                <div className="w-[30vw] min-w-[300px] text-justify"> 
                <div className="content-wrapper">
                <div id="heading">
                <h1>Event Name</h1>
                <h2>Event Name</h2>
                </div>
                Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc. Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc.
                </div>
                <div className="w-[30vw] min-w-[300px] text-justify"> 
                Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc. Lorem ipsum dolor sit amet consectetur. Sit enim euismod pellentesque vulputate dui vel. Feugiat eget condimentum posuere ipsum. Vehicula ut sit dolor sed parturient at nunc.
                </div>
            </div>
        </div> */}

        
        </>
    )
};

export default Bash;