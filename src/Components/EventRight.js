import '../Css/EventRight.css'

const EventRight = ({ name, image, content }) => {
    return (
        <>
         <div className="flex flex-wrap justify-center items-center">
        <div className="eventName">
            <div id="heading">
            <h1><span className='space'>s</span>{name}</h1>
            <h2>{name}</h2>
            </div>
        </div>
       
        <div className='event'>
            <div className="eventImg">
                <img src={image} alt={name} className="madhavBhaiya" />
            </div>
            <div className="eventDesc">
                {content}
            </div>
        </div>
        </div>
        </>
    )
};

export default EventRight;