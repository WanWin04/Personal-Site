import React from "react";
import "./Header.css";
import CTA from"./CTA";
import ME from "../../assets/me.png"

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Duong Quang Thang</h1>
        <h5 className="text-light">Student</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
