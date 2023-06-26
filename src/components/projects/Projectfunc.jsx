import React from "react";


export default function Projectfunc(props){
    return (
    <div className="card">
        <img src={`${props.images}`} alt="" />
        <h2>{props.title}</h2>
                <p>
                   {props.description}
                </p>
                <a href={props.link} target="_blank"><div class="buttonn">Read more</div></a>
    </div>
    )
}