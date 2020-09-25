import React from "react";
import "./About.css";
import Skills from "../Skills";
import { FaJava, FaPython, FaNodeJs, FaReact, FaGithub } from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";
function About({
  topLine,
  description_one,
  description_two,
  description_three,
  img,
  alt,
}) {
  return (
    <>
      <div className="about-container">
        <div className="about-row">
          <div className="about-col">
            <div className="about-img-wrapper">
              <img src={img} alt={alt} className="personal-picture" />
            </div>
          </div>
          <div className="about-col about-text">
            <div className="about-text-wrapper">
              <h1 className="about-topLine">{topLine}</h1>
              <br />
              <div className="description-wrapper">
                <p>{description_one}</p>
                <br />
                <p>{description_two}</p>
                <br />
                <p>{description_three}</p>
                <br />
                <p>Some technologies I am familiar with: </p>
              </div>
            </div>
            <div className="about-skills-wrapper">
              <Skills component={<FaJava />} title="Java" />
              <Skills component={<SiCplusplus />} title="C++" />
              <Skills component={<FaPython />} title="Python" />
              <Skills component={<SiJavascript />} title="Javascript" />
              <Skills component={<FaNodeJs />} title="Node.js" />
              <Skills component={<FaReact />} title="React.js" />
              <Skills component={<SiMongodb />} title="MongoDB" />
              <Skills component={<SiMysql />} title="mySQL" />
              <Skills component={<SiPostman />} title="Postman" />
              <Skills component={<FaGithub />} title="Git" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
