import React from "react";
import "./About.css";
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
          <div className="about-col">
            <div className="about-text-wrapper">
              <h1 className="about-topLine">{topLine}</h1>
              <br />
              <div className="description-wrapper">
                <p>{description_one}</p>
                <br />
                <p>{description_two}</p>
                <br />
                <p>{description_three}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
