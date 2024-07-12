import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Empowering Minds, Shaping Futures for a Brighter Tomorrow</h1>
        <p>
          Our pioneering curriculum is meticulously crafted to equip students
          with the essential knowledge, skills, and experiences required to
          thrive and lead in the ever-evolving landscape of education.
        </p>
        <button className="btn">
          Explore more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="36"
            height="36"
            color="#000000"
            fill="none"
          >
            <path
              d="M20 12L4 12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
