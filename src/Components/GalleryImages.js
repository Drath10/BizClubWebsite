import '../Css/Gallery.css'

const GalleryImages = ({ img1, img2, img3 }) => {
    return (
        <>
        <div className="Images">
            <div className="img1"> 
                <img src={img1} className="galleryImage"></img>
            </div>
            <div className="img1"> 
                <img src={img2} className="galleryImage"></img>
            </div>
            <div className="img1"> 
                <img src={img3} className="galleryImage"></img>
            </div>



        </div>

        </>
    )
};

export default GalleryImages;