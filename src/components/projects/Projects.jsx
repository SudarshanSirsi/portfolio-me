import React from "react";
import Projectfunc from "./Projectfunc";
import skillsdata from "../datas/skillsdata";

export default function Projects(props) {
    const projectdata = skillsdata.data.projects
    return (
        <section id="projectts" className="projectts">
            <h2 class="title">My Projects</h2>
            <div className="container">

                <p></p>
                        <div className="card-wrapper">
                        {projectdata.map((project, id) => (
                            <Projectfunc
                                key={id}
                                images={project.projectimage}
                                title={project.title}
                                description={project.description}
                                link={project.link}
                          />
                            ))}
                        </div>
        </div>
        </section>
    )
}


{/* <div className="container-project">
        <h1 className="section-heading"><span>My</span> Projects</h1>
        <div className="card-wrapper">
                    <div className="card">
                        <div className="img-wrapper">
                            <img src={images} alt="" />
                        </div>
                        <div className="card-content">
                            <a href="#">
                                <h1>Audi Webpage Clone</h1>
                            </a>
                            <span><b>HTML, CSS</b> || January 2023</span>
                            <p>Cloned Audi Internation website home page from scratch using HTML and CSS
                                only.</p>
                            <br /><br /><br /><a href="#">View source code</a>
                        </div>
                    </div>
                </div>
       </div> */}


//        <section className="project">
//        <div className="card">
//            <div className="img-wrapper">
//                <img src={images} alt="" />
//            </div>
//            <div className="card-content">
//                <a href="#">
//                    <h1>Audi Webpage Clone</h1>
//                </a>
//                <span><b>HTML, CSS</b> || January 2023</span>
//                <p>Cloned Audi Internation website home page from scratch using HTML and CSS
//                    only.</p>
//                <br /><br /><br /><a href="#">View source code</a>
//            </div>
//        </div>
//    </section>