import React from "react";
import "../css/AboutPark.css";
import aboutPark1 from "../images/aboutPark1.png";
import aboutPark2 from "../images/aboutPark2.png";

function AboutPark() {
  return (
    <div className="aboutParkLayout">
      <div>
        <img src={aboutPark1} alt="" className="aboutPark" />
        <img src={aboutPark2} alt="" className="aboutPark" />
      </div>
    </div>
  );
}

export default AboutPark;
