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
        <a href="https://www.facebook.com/profile.php?id=100047907622203">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/quangthang_26/">
          <FaInstagram />
        </a>
        <a href="https://github.com/WanWin04">
          <FaGithub />
        </a>
      </div>

      <div className="footer_conpyright">
        <small>&copy; @Quang Thang</small>
      </div>
    </footer>
  );
};

export default Footer;