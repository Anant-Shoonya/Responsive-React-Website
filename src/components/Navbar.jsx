import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../assets/Logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [flag, setFlag] = useState(true);

  const toggleClick = ()=>{
    flag ? setFlag(false) : setFlag(true);
  }

  return (
    <nav className={`container ${sticky ? "darkNav" : ""}`}>
      <img src={Logo} className="logo" />
      <ul className={flag ? "" : "show-menu"}>
        <li >
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>{" "}
        {/*the value of "to" attribute is nothing but the className of the required div*/}
        <li>
          <Link to="program" smooth={true} offset={-250} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-100} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="48"
        height="48"
        color="#ffffff"
        fill="none"
        className="menu-icon"
        onClick={toggleClick}
      >
        <path
          d="M10 5L20 5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 12L20 12"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 19L14 19"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </nav>
  );
};

export default Navbar;
