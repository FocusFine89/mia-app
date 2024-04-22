import React from "react";
 function ImgComponent(props){
    return(
        <div>
        <img src={props.src} alt={props.alt} className={props.className} />
        </div>
    )
 }

 export default ImgComponent