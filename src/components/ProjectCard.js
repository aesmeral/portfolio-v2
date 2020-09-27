import React from "react";
import "./pages/HomePage/Projects.css";
function ProjectCard({ title, subtitle, description }) {
  return (
    <div>
      <h1 className="project-title">{title}</h1>
      <h2 className="project-subtitle">{subtitle}</h2>
      <hr className="project-line" />
      <br />
      <p className="project-description">{description}</p>
      <br />
    </div>
  );
}

export default ProjectCard;
