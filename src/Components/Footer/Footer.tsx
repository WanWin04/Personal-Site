import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        WanWin
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100047907622203" className="brands">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/quangthang_26/" className="brands">
          <FaInstagram />
        </a>
        <a href="https://github.com/WanWin04" className="brands">
          <FaGithub />
        </a>
      </div>

      <div className="footer_conpyright">
        <small>&copy; @Quang Thang.  All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;