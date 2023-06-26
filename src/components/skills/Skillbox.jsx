import React from "react";

export default function Skillbox(props){
    return (
        <div>
            {/* <!--skill-box--> */}
            <div className="skill-box" data-aos="fade-up" >
                            <div className="s-box-icon">
                                <i className={props.icon} style={{color: "#62590d",}}></i>
                            </div>
                            <div className="s-box-text">
                                <strong>{props.technology}</strong>
                                <p>{props.details}</p>
                                <div className={props.progressLine}><span></span></div>
                                <h3>{props.test}</h3>
                            </div>
            </div>
        </div>
    )
}

