import React from "react";

export default function Certificate(props) {
    function handleMouseOver(){
        
    }
    return (
        <div className="certificate">
            <img src={`${props.image}`} alt="" onMouseOver={handleMouseOver} />
        </div>
    )
}