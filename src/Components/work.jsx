import React from "react";
import {imgdata} from "../imgdata"

// import "./Scroll.css"
export default function work(){
    
    return(
        <>
        {/* <div className="relative flex items-center group my-8"> */}
       
            
        <div >
            <splide>
        {
            imgdata.map((item)=>{
               return (
                <splideslide>
                <img src = {item.img} alt = "/" />
                </splideslide>
               )
            })
            
        }
            </splide>
        </div>
      
         
        {/* </div> */}
        </>
    )
}