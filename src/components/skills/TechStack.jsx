import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
  DiGithubBadge,
  DiEclipse
} from "react-icons/di";
import {
  SiHibernate,
  SiSpring,
  SiMysql,
  SiAmazonaws,
  SiIntellijidea,
  SiVisualstudiocode,
  SiPostman,
  SiJupyter,
  SiLinux,
  SiPandas
} from "react-icons/si";
import { MdOutlineHtml, MdCss } from "react-icons/md";

export default function Techstack() {
  const [ishovered, setIshovered] = React.useState(false);
  const [position, setPosition]  = React.useState({x:0 , y:0})
  const [imageName, setImageName] = React.useState("")
  
  function handleMouseEnter(imageName){
    setIshovered(true)
    setImageName(imageName)
  }

  function handleMouseLeave(e){
    setIshovered(false);
    console.log(e);
    setImageName('');
  }
  console.log(ishovered)
function handleMouseMove(event) {
  setPosition({x:event.clientX, y:event.clientY})
}
  
  return (
    <>
      <div className="icon--container">
        <div className="icons"
            onMouseEnter={() => handleMouseEnter("java")}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
          <DiJava color="white" size={120} values="Java"/>
          {ishovered && <div className="name-overlay" 
          style={{top:position.y-150, left: position.x-60}}
          ></div>}
        </div>
      </div>

      <div className="icon--container">
      <div className="icons"
            onMouseEnter={() => handleMouseEnter('Springs')}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
          <SiSpring color="white" size={80} className="react-icons" />
          {ishovered && <div className="name-overlay" 
          style={{top:position.y-150, left: position.x-60}}
          ></div>}
          </div>
      </div>
      <div className="icon--container">
        <div className="icons"><SiHibernate color="white" size={80} /></div>
      </div>

      <div className="icon--container">
        <div className="icons"><SiMysql color="white" size={90} /></div>
      </div>
      <div className="icon--container">
        <div className="icons"><DiJavascript1 color="white" size={90} /></div>
      </div>

      <div className="icon--container">
        <div className="icons"><MdOutlineHtml color="white" size={90} /></div>
      </div>

      <div className="icon--container">
        <div className="icons"><MdCss color="white" size={90} /></div>
      </div>
      <div className="icon--container">
        <div className="icons"><DiReact color="white" size={90} /></div>
      </div>
      <div className="icon--container">
        <div className="icons"><DiPython color="white" size={90} /></div>
      </div>
      <div className="icon--container">
        <div className="icons"><SiPandas color="white" size={90} /></div>
      </div>
      <div className="icon--container">
        <div className="icons"><DiGit color="white" size={90} /></div>
      </div>
      <div className="icon--container">
        <div className="icons"><SiAmazonaws color="white" size={90} /></div>
      </div>

    </>
  );
}

export function ToolsIUse() {
  return (
    <>
      <div className="icon--container">
        <div className="icons"><DiGithubBadge color="white" size={90} /></div>
      </div>
      <div className="icon--container">
        <div className="icons"><DiEclipse color="white" size={90} /></div>
      </div>
      <div className="icon--container">
        <div className="icons"><SiIntellijidea color="white" size={70} /></div>
      </div>
      <div className="icon--container">
        <div className="icons"><SiVisualstudiocode color="white" size={70} /></div>
      </div>
      <div className="icon--container">
        <div className="icons"><SiPostman color="white" size={90} /></div>
      </div>
      <div className="icon--container">
        <div className="icons"><SiJupyter color="white" size={90} /></div>
      </div>
      <div className="icon--container">
        <div className="icons"><SiLinux color="white" size={90} /></div>
      </div>

    </>
  )
}

// import React from "react";
// import { IconName } from "react-icons/di";


// export default function TechStack(props) {
//     return (
//         <div className="tech-stack">
//             <div className="tech--circle"><img src={`${props.image}`} alt="" /></div>
//             <div className="tech--text"></div>
//         </div>
//     )
// }