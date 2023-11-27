import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div className="container header_container">
        <h5 className="text-light">Hello I'm</h5>
        <h1 className="text-light">Duong Quang Thang</h1>
        <h5 className="text-light">Student of VNUHCM - University of Science</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#Contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;