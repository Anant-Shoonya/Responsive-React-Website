import React from "react";
import "./About.css";
import aboutImg from "../assets/about-img.jpg";

const About = (props) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutImg} className="aboutImg" />
        <div className="caption">
          <svg
            onClick={()=>{
              props.turnFlag(true);
            }}
            fill="#9d18cd"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 408.22 408.22"
            xml:space="preserve"
            stroke="#9d18cd"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M204.11,0C91.388,0,0,91.388,0,204.111c0,112.725,91.388,204.11,204.11,204.11c112.729,0,204.11-91.385,204.11-204.11 C408.221,91.388,316.839,0,204.11,0z M286.547,229.971l-126.368,72.471c-17.003,9.75-30.781,1.763-30.781-17.834V140.012 c0-19.602,13.777-27.575,30.781-17.827l126.368,72.466C303.551,204.403,303.551,220.217,286.547,229.971z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Cultivating the Innovators and Leaders of the Future</h2>
        <p>
          "Begin a transformative educational journey with our university's
          comprehensive programs. Our cutting-edge curriculum is meticulously
          designed to empower students with the knowledge, skills, and
          experiences essential to excel and lead in the dynamic field of
          education."
        </p>
        <p>
          "Emphasizing innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          significant impact in classrooms, schools, and communities."
        </p>
        <p>
          "Whether you aim to become a teacher, administrator, counselor, or
          educational leader, our diverse array of programs provides the ideal
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education."
        </p>
      </div>
    </div>
  );
};

export default About;
