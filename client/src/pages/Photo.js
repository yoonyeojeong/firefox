import React from "react";
import "../css/Photo.css";
import photo_03 from "../images/photozone/photo_03.jpg";
import photo_04 from "../images/photozone/photo_04.jpg";
import photo_05 from "../images/photozone/photo_05.jpg";
import photo_06 from "../images/photozone/photo_06.jpg";
import photo_07 from "../images/photozone/photo_07.jpg";

function Photo() {
  return (
    <div id="slider">
      <div className="image-box">
        <div className="clone">
          <img src={photo_03} alt="" className="img" />
        </div>
        <div className="clone">
          <img src={photo_04} alt="" className="img" />
        </div>
        <div className="clone">
          <img src={photo_05} alt="" className="img" />
        </div>
        <div className="clone">
          <img src={photo_06} alt="" className="img" />
        </div>
        <div className="clone">
          <img src={photo_07} alt="" className="img" />
        </div>
      </div>
    </div>
  );
}

export default Photo;
