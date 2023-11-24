import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/WanWin04" target='_blank'><FaGithub /></a>
        <a href="https://www.instagram.com/quangthang_26/" target='_blank'><LuInstagram /></a>
        <a href="https://web.facebook.com/profile.php?id=100047907622203" target='_blank'><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocials