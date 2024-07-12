import React from "react";
import "./Programs.css";
import program_1 from "../assets/program_1.jpg";
import program_2 from "../assets/program_2.jpg";
import program_3 from "../assets/program_3.jpg";

const programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} />
        <div className="caption">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="88"
            height="88"
            color="#ffffff"
            fill="none"
          >
            <path
              d="M19 10C16.995 9.36815 14.5882 9 12 9C9.41179 9 7.00499 9.36815 5 10V13.5C7.00499 12.8682 9.41179 12.5 12 12.5C14.5882 12.5 16.995 12.8682 19 13.5V10Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M19 13V15.0232C19 17.1542 17.9679 19.129 16.2812 20.2254L14.8812 21.1354C13.1078 22.2882 10.8922 22.2882 9.11882 21.1354L7.71883 20.2254C6.03208 19.129 5 17.1542 5 15.0232V13"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M19 10L20.1257 9.4071C21.3888 8.57875 22.0203 8.16457 21.9995 7.57281C21.9787 6.98105 21.32 6.62104 20.0025 5.90101L15.2753 3.31756C13.6681 2.43919 12.8645 2 12 2C11.1355 2 10.3319 2.43919 8.72468 3.31756L3.99753 5.90101C2.68004 6.62104 2.02129 6.98105 2.0005 7.57281C1.9797 8.16457 2.61125 8.57875 3.87434 9.4071L5 10"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <p>Undergraduate Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} />
        <div className="caption">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="88"
            height="88"
            color="#ffffff"
            fill="none"
          >
            <path
              d="M11.9458 6L9.58384 17.0855C9.39588 17.9677 9.49933 18.298 10.1472 18.9315L12.7673 21.4934C13.1127 21.8311 13.2854 22 13.5 22C13.7146 22 13.8873 21.8311 14.2327 21.4934L16.8528 18.9315C17.5007 18.298 17.6041 17.9677 17.4162 17.0855L15.0542 6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5568 3.12403C10.4894 2.60014 10.4557 2.3382 10.6093 2.1691C10.763 2 11.0347 2 11.5781 2H15.4219C15.9653 2 16.237 2 16.3907 2.1691C16.5443 2.3382 16.5106 2.60014 16.4432 3.12403L16.3924 3.51931C16.2498 4.62718 16.1786 5.18111 15.8224 5.54049C15.7645 5.59888 15.7018 5.65262 15.635 5.70117C15.2238 6 14.6492 6 13.5 6C12.3508 6 11.7762 6 11.365 5.70117C11.2982 5.65262 11.2355 5.59888 11.1776 5.54049C10.8214 5.18111 10.7502 4.62718 10.6076 3.5193L10.5568 3.12403Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 15C9.39225 15.6925 8.87761 16 8.5 16C8.01562 16 7.1436 14.7794 6.75659 13.8954C6.575 13.4806 6.4842 13.2732 6.50226 13.0108C6.52032 12.7484 6.63925 12.5565 6.8771 12.1727C8.22214 10.0024 10.5145 8.02113 12 6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} />
        <div className="caption">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="88"
            height="88"
            color="#ffffff"
            fill="none"
          >
            <path
              d="M11.4706 22C7.47751 22 5.48098 22 4.24049 20.8284C3 19.6569 3 17.7712 3 14L3 10C3 6.22876 3 4.34315 4.24049 3.17157C5.48098 2 7.47752 2 11.4706 2L12.5294 2C16.5225 2 18.519 2 19.7595 3.17157C21 4.34315 21 6.22876 21 10M11.5 22H13"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M8 7H16"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M8 12H13"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M17.5 18.5896L16.5978 21.7428C16.5572 21.9011 16.7139 22.0385 16.8659 21.9778L18.8514 21.1849C18.9468 21.1468 19.0532 21.1468 19.1486 21.1849L21.1531 21.9854C21.3014 22.0446 21.456 21.9149 21.4231 21.7589L20.6589 18.4911M22 15.9951C22 14.341 20.6569 13 19 13C17.3431 13 16 14.341 16 15.9951C16 17.6493 17.3431 18.9902 19 18.9902C20.6569 18.9902 22 17.6493 22 15.9951Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
          <p>P.H.D</p>
        </div>
      </div>
    </div>
  );
};

export default programs;
