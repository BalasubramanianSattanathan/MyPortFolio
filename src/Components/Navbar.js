import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Nav = ({ toggleTheme, isDarkMode }) => {
    const [navbarblur, setnavbarblur] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        }
        else {
            setnavbarblur(false);
        }
    }

    var showMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");

        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }

    window.addEventListener("scroll", scrollHandler);

    const themeIcon = isDarkMode ? (
        <HiMoon
            strokeWidth={1}
            size={20}
            color={isDarkMode ? "" : "#FFFFFF"}
        />
    ) : (
        <CgSun
            strokeWidth={1}
            size={20}
            color={isDarkMode ? "A7A7A7" : "#111111"}
        />
    );

    return (
        <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>
            {/* <h1 title='Hello Recruiter !' className='Logo'>{`<Bala />`}</h1> */}
            <div className='footerLinks'>
                <a href="https://github.com/BalasubramanianSattanathan" target='_blank'><FaGithub /></a>
                <a href="https://www.linkedin.com/in/balasubramanian-sattanathan/" target='_blank'><FaLinkedin /></a>
                <a href='mailTo:balasubramanian.sattanathan@gmail.com' target='_blank'><GrMail /></a>
                <a href="https://wa.me/+918870071801/?text=Hi%20Balasubramanian" target='_blank'><FaWhatsapp /></a>
            </div>
            <div onClick={toggleTheme}>
                {themeIcon}
            </div>
            <div className='Hamburger' onClick={showMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
            <ul className='NavbarLinks'>
                <li onClick={hideMenu}><Link to="/"><AiOutlineHome /> Home</Link></li>
                <li onClick={hideMenu}><Link to="/About"><BsPerson /> About</Link></li>
                <li onClick={hideMenu}><Link to="/Project"><BsCodeSlash /> Project</Link></li>
                <li onClick={hideMenu}><Link to="/Resume"><CgFileDocument /> Resume</Link></li>
            </ul>
        </nav>
    )
}

export default Nav