import React from "react";
import "./Contact.css";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="row-container">
          <div className="contact-row">
            <h1 className="contact-topline">Get In Touch</h1>
          </div>
          <div className="contact-row">
            <p>How to Contact Me?</p>
          </div>
          <br />
          <div className="contact-row">
            <div className="contact-social-wrapper">
              <IconContext.Provider value={{ color: "white" }}>
                <a href="https://twitter.com/aesmeral_" target="_blank">
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/aesmeralda_/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/anthony-esmeralda-88844a151/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a href="mailto: aresmeralda95@gmail.com">
                  <FiMail />
                </a>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
