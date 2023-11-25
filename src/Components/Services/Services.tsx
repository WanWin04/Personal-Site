import React from "react";
import "./Services.css";
import { FaCheck } from "react-icons/fa";

const Services: React.FC = () => {
  return (
    <section id="Services">
      <h2>Services</h2>

      <div className="container services_container">
        <article className="services">
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="services_list">
            <li>
              <FaCheck className="services_list-icon" />
              <p>YEARSYEARSYEARSYEARS</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>YEARSYEARSYEARSYEARS</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>YEARSYEARSYEARSYEARS</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>YEARSYEARSYEARSYEARS</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="services">
          <div className="services_head">
            <h3>BE Design</h3>
          </div>

          <ul className="services_list">
            <li>
              <FaCheck className="services_list-icon" />
              <p>YEARSYEARSYEARSYEARS</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>YEARSYEARSYEARSYEARS</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>YEARSYEARSYEARSYEARS</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>YEARSYEARSYEARSYEARS</p>
            </li>
          </ul>
        </article>
        {/* END OF BE */}

        <article className="services">
          <div className="services_head">
            <h3>AI Design</h3>
          </div>

          <ul className="services_list">
            <li>
              <FaCheck className="services_list-icon" />
              <p>YEARSYEARSYEARSYEARS</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>YEARSYEARSYEARSYEARS</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>YEARSYEARSYEARSYEARS</p>
            </li>

            <li>
              <FaCheck className="services_list-icon" />
              <p>YEARSYEARSYEARSYEARS</p>
            </li>
          </ul>
        </article>
        {/* END OF AI */}
      </div>
    </section>
  );
};

export default Services;