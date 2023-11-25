import React from "react";
import CV from "../../assets/cv.pdf";

const CTA: React.FC = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#Contact" className="btn btn-primary">
        Talk
      </a>
    </div>
  );
};

export default CTA;