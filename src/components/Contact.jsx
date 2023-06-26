import React from "react";

export default function Contact() {
    return (
        <div>
            {/* <!--get-in-touch------------------> */}
            <section id="get-in-touch" data-aos="fade-up">
                <span>Still not conviced for Hiring?</span>
                <a href="#">Get In Touch</a>
            </section>

            {/* <!--contact---------------> */}
    <section id="contact">
        {/* <!--form-----------> */}
        <form data-aos="fade-up">
            {/* <!--full-name----> */}
            <input type="text" name="fullname" placeholder="Full Name" required />
            {/* <!--email--------> */}
            <input type="email" name="email" placeholder="Example@gmail.com" required />
            {/* <!--write-something--> */}
            <textarea name="message" placeholder="Write Something...." required></textarea>
            {/* <!--send-btn----> */}
            <input type="submit" value="Send"></input>
        </form>
    </section>
        </div>
    )
}