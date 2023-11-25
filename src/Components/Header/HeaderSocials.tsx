import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const HeaderSocials: React.FC = () => {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com" target='_blank' rel='noopener noreferrer'>
        <FaLinkedin />
      </a>
      <a href="https://github.com/WanWin04" target='_blank' rel='noopener noreferrer'>
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/quangthang_26/" target='_blank' rel='noopener noreferrer'>
        <FaInstagram />
      </a>
      <a href="https://web.facebook.com/profile.php?id=100047907622203" target='_blank' rel='noopener noreferrer'>
        <FaFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;