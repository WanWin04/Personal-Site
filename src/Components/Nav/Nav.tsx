import React, { useState } from "react";
import "./Nav.css";
import { GoHome } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { GrServices } from "react-icons/gr";

const Nav: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <GoHome />
      </a>
      <a
        href="#About"
        onClick={() => setActiveNav("#About")}
        className={activeNav === "#About" ? "active" : ""}
      >
        <CiUser />
      </a>
      <a
        href="#Services"
        onClick={() => setActiveNav("#Services")}
        className={activeNav === "#Services" ? "active" : ""}
      >
        <GrServices />
      </a>
      <a
        href="#Contact"
        onClick={() => setActiveNav("#Contact")}
        className={activeNav === "#Contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
