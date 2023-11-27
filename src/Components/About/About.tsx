import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { IoFolderOpenOutline } from "react-icons/io5";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
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
          {/* <div className="about_cards">
            <article className="about_card">
              <AiOutlineAntDesign className="about_icon" />
              <h5>Experience</h5>
              <small>... Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Algorithm</h5>
              <small>... Years Working</small>
            </article>

            <article className="about_card">
              <IoFolderOpenOutline className="about_icon" />
              <h5>Projects</h5>
              <small>... Years Working</small>
            </article>
          </div> */}

          <p>
            Hello! I'm Duong Quang Thang and I currently a sophomore at the VNUHCM - University of
            Science.
          </p>

          <section className="bio">
            <h3>
              Bio
            </h3>
            <div className="bio_item">
              <span>2019</span>
              <span>
                Started high school at the Tran Hung Dao High School for the Gifted - Binh Thuan.
              </span>
            </div>
            <div className="bio_item">
              <span>2022</span>
              <span>
                Started Bachelor&apos;s degree in Information Technology (High Quality Program) at the VNUHCM
                - University of Science.
              </span>
            </div>
          </section>

          <a href="#Portfolio" className="btn btn-primary">
            My Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
