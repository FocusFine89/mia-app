import React from "react";
 function ButtonComponent(props){
    return(
        <>
       <button id={props.id} className={props.className}>
        {props.txt}
       </button>
        </>
    )
 }

 export default ButtonComponent