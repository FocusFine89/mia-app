import React from "react";
 function NavBar(props){
    return(
        <>
        <nav>
            <ul>
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
            </ul>
        </nav>
        </>
    )
 }

 export default NavBar