import React from "react";
import model_bg from "../assets/images/images/model-bg.svg";
import Type from "./Type";
// import model from "../assets/images/images/model.png"
export default function Main() {
    return (

        <div>
            {/* <!--main-section----------------------> */}
            <section id="main">
                {/* <!--text--------------> */}
                <div className="main-text">
                   
                    <h1>Hi, <br />I am <span>Sudarshan</span>, a <div className="moving--text"><Type /></div></h1>
                    <p>based in Bengaluru having specialization in Backend and Frontend development.</p>
                    {/* <!--btns----------> */}
                    <div className="main-btns">
                        <a href="Sudarshan_Hegde_ResumeJ.pdf" className="download-cv-btn" download>Download CV</a>
                        <a href="mailto:sudarshanhegde247@gmail.com?subject=Invitation%20for%20the%20interview" className="hire-me-btn">Hire Me</a>
                    </div>
                </div>
                {/* <!--mode-bg------------> */}
                <div className="model-bg">
                    <img src={model_bg} data-aos="fade" data-aos-duration="3000" />
                </div>
                {/* <!--model--------------> */}
                <div className="model">
                    {/* <img src={model} /> */}
                </div>
            </section>
        </div>
    )
}