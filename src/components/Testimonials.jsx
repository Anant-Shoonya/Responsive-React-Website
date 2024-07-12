import React, { useRef } from "react";
import "./Testimonials.css";
import user_1 from "../assets/user_1.jpg";
import user_2 from "../assets/user_2.jpeg";
import user_3 from "../assets/user_3.jpeg";
import user_4 from "../assets/user_4.jpeg";
import next_icon from "../assets/next-icon.png";
import back_icon from "../assets/back-icon.png";

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const forwardButton = () => {
    if(tx>-50)
    {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const backwardButton = () => {
    if(tx<0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" onClick={forwardButton} />
      <img src={back_icon} className="back-btn" onClick={backwardButton} />
      <div className="slider">
        <ul ref = {slider}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_1} />
                <div>
                  <h3>Krishna Rohria</h3>
                  <span>TechEra, India</span>
                </div>
              </div>
              <p>
                Choosing to persue my B.tech degree at TechEra was one of the
                best decisions I have ever made. The supportive community,
                state-of-the-art facilities, and commitment to acadmic
                excellence have truely exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_2} />
                <div>
                  <h3>Krishna Rohria</h3>
                  <span>TechEra, India</span>
                </div>
              </div>
              <p>
                Choosing to persue my B.tech degree at TechEra was one of the
                best decisions I have ever made. The supportive community,
                state-of-the-art facilities, and commitment to acadmic
                excellence have truely exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_3} />
                <div>
                  <h3>Krishna Rohria</h3>
                  <span>TechEra, India</span>
                </div>
              </div>
              <p>
                Choosing to persue my B.tech degree at TechEra was one of the
                best decisions I have ever made. The supportive community,
                state-of-the-art facilities, and commitment to acadmic
                excellence have truely exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_4} />
                <div>
                  <h3>Krishna Rohria</h3>
                  <span>TechEra, India</span>
                </div>
              </div>
              <p>
                Choosing to persue my B.tech degree at TechEra was one of the
                best decisions I have ever made. The supportive community,
                state-of-the-art facilities, and commitment to acadmic
                excellence have truely exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
