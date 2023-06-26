import React from "react";


export default function Navbar() {
    return (
        <div>
            {/* <!--navigation-bar----------------------------> */}
            <nav className="navigation">
                {/* <!--logo--> */}
                <a href="#" className="logo">
                    <img src="Sud-Code-trans.png" height={510} width={100}/>
                </a>
                {/* <!--menu-btn-----> */}
                <input type="checkbox" className="menu-btn" id="menu-btn" />
                <label for="menu-btn" className="menu-icon">
                    <span className="nav-icon"></span>
                </label>
                {/* <!--menu---> */}
                <ul className="menu">
                    <li><a href="#main">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projectts">Projects</a></li>
                    <li><a href="#certifications">Certificates</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                {/* <!--hire-me-btn-----> */}
                <a href="#" className="hire-me">
                    
                    {/* <!--icon--> */}
                    <i className="fas fa-chevron-right"></i>
                </a>
            </nav>
        </div>
    )
}