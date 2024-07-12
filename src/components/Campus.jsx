import React from "react";
import './Campus.css'
import galery_1 from "../assets/galery_1.jpg";
import galery_2 from "../assets/galery_2.jpg";
import galery_3 from "../assets/galery_3.jpg";
import galery_4 from "../assets/galery_4.jpg";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={galery_1} />
        <img src={galery_2} />
        <img src={galery_3} />
        <img src={galery_4} />
      </div>
      <button className="btn dark-btn">See more here<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="36"
  height="36"
  color="#ffffff"
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
</svg></button>
    </div>
  );
};

export default Campus;
