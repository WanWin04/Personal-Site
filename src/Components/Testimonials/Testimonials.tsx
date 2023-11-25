import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Tina",
    review: "YearYearYear",
  },
  {
    avatar: AVTR1,
    name: "Tina",
    review: "YearYearYear",
  },
  {
    avatar: AVTR1,
    name: "Tina",
    review: "YearYearYear",
  },
]

const Testimonials = () => {
  return (
    <section id="Testimonials">
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonials">
                <div className="client_avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">
                  {review}
                </small>
              </article>
            );
          })
        }
      </div>
    </section>
  );
};

export default Testimonials;
