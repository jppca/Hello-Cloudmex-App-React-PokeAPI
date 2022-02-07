import React from "react";

const URLImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png";

export function Footer({title,subtitle}){
    return(
        <div className="grid justify-items-center" >
            <img src={URLImage}  width="60" height="60" alt=""/>
        </div> 
    );
}
