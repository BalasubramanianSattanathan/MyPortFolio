import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Balasubramanian Sattanathan</h4>
      <h4>Copyright &copy;2024</h4>
      <div className='footerLinks'>
        <a href="https://github.com/BalasubramanianSattanathan" target='_blank'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/balasubramanian-sattanathan/" target='_blank'><FaLinkedin /></a>
        <a href='mailTo:balasubramanian-sattanathan@gmail.com' target='_blank'><GrMail /></a>
      </div>
    </footer>
  )
}

export default Footer