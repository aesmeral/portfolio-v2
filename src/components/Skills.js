import React from "react";
import { SiPostman } from "react-icons/si";
import "./Skills.css";
function Skills({ component, title }) {
  return (
    <div className="skills">
      <div className="icon">{component}</div>
      <br />
      <p>{title}</p>
    </div>
  );
}

export default Skills;
