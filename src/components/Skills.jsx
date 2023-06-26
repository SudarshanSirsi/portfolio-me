import React from "react";
import skillsdata from "./datas/skillsdata.jsx";
import TechStack, { ToolsIUse } from "./skills/TechStack.jsx";

export default function Skills() {
    const skilldatas = skillsdata.data.skills;

    return (
        <div>
            <section id="skills">
                {/* <!--skills-text-section----> */}
                <div className="skills-text-section">
                    {/* <!--heading---------> */}
                    <div className="skill-heading" data-aos="fade" >
                        <span>My Skills</span>
                        <h2>My Teck Stack</h2>
                    </div>
                </div>
                {/* <!--skills-box-container---> */}
                <div className="s-box-container">
                   <TechStack />
                </div>
                 <div className="skill-heading" data-aos="fade" >
                        <h2>Tools I use</h2>
                    </div>

                    <div className="s-box-container">
                   <ToolsIUse />
                </div>
            </section>
                
        </div>
    )
}


































 {/* {skilldatas.map((tech, id) => (
                            <Skillbox
                                key={id}
                                technology={tech.technology}
                                details={tech.details}
                                icon={tech.icon}
                                progressLine={tech.progressLine}
                            />
))} */}

  {/* <!--skill-img-section----------> */}
                {/* <div className="skill-img" >
                    <img src={skill2} data-aos="fade" />
        </div> */}