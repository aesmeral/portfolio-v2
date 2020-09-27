import React from "react";
import "./Projects.css";
import { FaYoutube, FaGithub, FaReact, FaJava } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IconContext } from "react-icons/lib";
import Iconlink from "../../Iconlink";
import ProjectCard from "../../ProjectCard";
var fabflix_images = [];
var secrets_images = [];
class Projects extends React.Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentDidMount() {
    fabflix_images = this.importAll(
      require.context("./project_images/fabflix", false, /\.(png|jpe?g|svg)$/)
    );
    console.log(fabflix_images);
  }
  render() {
    return (
      <>
        <div className="projects-container">
          <div className="project-row">
            <div className="project-column">
              <div className="carousel-wrapper">
                <div className="project-slideshow">
                  <Carousel>
                    <div className="project-images">
                      <img
                        src="https://i.ytimg.com/vi/dIh4xxFQrTU/maxresdefault.jpg"
                        alt=""
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="project-column">
              <div className="project-text-wrapper">
                <ProjectCard
                  title="Secrets"
                  subtitle="MERN Project"
                  description="Single page social media web application for users to post their real life or fake secrets anonymously, view other peoples secrets, and create an account to save a list of favorite secrets they have encountered."
                />
                <div className="details-wrapper">
                  <div className="project-links">
                    <p>
                      <u>Project Links</u>
                    </p>
                    <br />
                    <div className="project-links-container">
                      <Iconlink
                        href="#"
                        component={<FaGithub />}
                        desc="Coming Soon"
                        size="35px"
                        fsize="9px"
                      />
                      <Iconlink
                        href="#"
                        component={<FaYoutube />}
                        desc="Coming Soon"
                        size="35px"
                        fsize="9px"
                      />
                      <Iconlink
                        href="#"
                        component={<CgWebsite />}
                        desc="Coming Soon"
                        size="35px"
                        fsize="9px"
                      />
                    </div>
                  </div>
                  <div className="tech-description">
                    <p>
                      <u>Technologies Used</u>
                    </p>
                    <br />
                    <p>MongoDB, ExpressJS, ReactJS, NodeJS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-row">
            <div className="project-column">
              <div className="carousel-wrapper">
                <div className="project-slideshow">
                  <Carousel>
                    {fabflix_images.map((image, index) => (
                      <div className="project-images">
                        <img key={index} src={image} alt="" />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="project-column">
              <div className="project-text-wrapper">
                <ProjectCard
                  title="FabFlix"
                  subtitle="CRUD Project"
                  description="Single page eCommerce web application where users can create
                  accounts, browse for movies, view their shopping card, and
                  make purchases via PayPal."
                />
                <div className="details-wrapper">
                  <div className="project-links">
                    <p>
                      <u>Project Links</u>
                    </p>
                    <br />
                    <div className="project-links-container">
                      <Iconlink
                        href="https://github.com/aesmeral/fabflix"
                        component={<FaGithub />}
                        target="_blank"
                        desc="Source Code"
                        size="40px"
                        fsize="10px"
                      />
                      <Iconlink
                        href="https://www.youtube.com/playlist?list=PLUk7fytRcJcYp0UHiIClwOd-Bq6vIy5jw"
                        component={<FaYoutube />}
                        target="_blank"
                        desc="Video Demo"
                        size="40px"
                        fsize="10px"
                      />
                    </div>
                  </div>
                  <div className="tech-description">
                    <p>
                      <u>Technologies Used</u>
                    </p>
                    <br />
                    <p>
                      Java, ReactJS, MySQL, Jersey, Jackson, Grizzly, Gradle,
                      JDBC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
