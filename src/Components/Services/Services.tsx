import React from "react";
import "./Services.css";
import { FaCheck } from "react-icons/fa";

const Services: React.FC = () => {
  return (
    <section id="Services">
      <h2>Skills</h2>

      <div className="container services_container">
        <article className="services">
          <div className="services_head">
            <h3>Experience</h3>
          </div>

          <ul className="services_list">
            <li>
              <FaCheck className="services_list-icon" />
              <p>Update later</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="services">
          <div className="services_head">
            <h3>Programming Languages</h3>
          </div>

          <ul className="services_list">
            <li>
              <FaCheck className="services_list-icon" />
              <p>C/C++</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>Python</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>Javascript/Typescript</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>HTML/CSS</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>XML/JSON</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>LaTeX</p>
            </li>
          </ul>
        </article>
        {/* END OF BE */}

        <article className="services">
          <div className="services_head">
            <h3>Frameworks/Tools</h3>
          </div>

          <ul className="services_list">
            <li>
              <FaCheck className="services_list-icon" />
              <p>Node.js</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>ReactJS/React Native</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>Tensorflow</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>Jupyter Notebook</p>
            </li>
          </ul>
        </article>
        {/* END OF AI */}

        <article className="services">
          <div className="services_head">
            <h3>Platform</h3>
          </div>

          <ul className="services_list">
            <li>
              <FaCheck className="services_list-icon" />
              <p>Leetcode</p>
            </li>
          </ul>
        </article>
        {/* END OF AI */}
      </div>
    </section>
  );
};

export default Services;