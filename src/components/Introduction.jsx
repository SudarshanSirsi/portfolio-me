import React from "react";


export default function Introduction() {
    return (
        <div>
            {/* <!--introduction--------------------------------> */}
            <section id="introduction">
                {/* <!--heading----> */}
                <div className="intro-heading" data-aos="fade">
                    <strong>Self Introduction</strong>
                    <p>Hello, In this video i am introduced myself. After Watching this video you know who i am , My Expertice.</p>
                </div>
                {/* <!--place-your-self-introduction-video-here--> */}
                <div className="intro-video" data-aos="fade-up">
                    <iframe src="https://www.youtube.com/embed/LUSa3yRTB9A" frameborder="0"></iframe>
                </div>

            </section>
        </div>
    )
}