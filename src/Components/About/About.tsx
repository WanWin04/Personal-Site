import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { LiaAwardSolid } from "react-icons/lia";
import { FiUsers } from "react-icons/fi";
import { IoFolderOpenOutline } from "react-icons/io5";

const About = () => {
  return (
    <section id="About">
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <LiaAwardSolid className="about_icon" />
              <h5>Experience</h5>
              <small>... Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>... Years Working</small>
            </article>

            <article className="about_card">
              <IoFolderOpenOutline className="about_icon" />
              <h5>Projects</h5>
              <small>... Years Working</small>
            </article>
          </div>

          <p>
            ... Years Working... Years Working... Years Working... Years Working
          </p>

          <a href="#Contact" className="btn btn-primary">
            Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
