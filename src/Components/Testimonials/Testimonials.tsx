import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const Testimonials = () => {
  return (
    <section id="Testimonials">
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        <article className="testimonials">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client_name">Errrrrrrr</h5>
          <small className="client_review">
            YearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYear
          </small>
        </article>

        <article className="testimonials">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client_name">Errrrrrrr</h5>
          <small className="client_review">
            YearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYear
          </small>
        </article>

        <article className="testimonials">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client_name">Errrrrrrr</h5>
          <small className="client_review">
            YearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYearYear
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
