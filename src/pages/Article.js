import React from "react";
import "../css/common.css";
import "../css/reset.css";
import "../css/article.css";
import "../css/main.css";
import slogan_main from "../images/main/img_slogan_main.png";
import tempImg from "../images/temp.jpg";
import Photo from "./Photo";

function Article() {
  return (
    <article id="container" className="main">
      <div className="intro_motion">
        <img src={slogan_main} className="pc_only" alt="" />
      </div>
      <div className="video_wrap">
        <img className="home_img" src={tempImg} alt="" />
      </div>
      <div className="visual pc_only">
        <p className="visible">
          <img
            src="./images/main/img_slogan_main.png"
            className="visual_img back"
            alt=""
            id="id_1"
          />
          <img
            src="./images/main/img_slogan_main.png"
            className="visual_img front-1"
            alt=""
            id="id_2"
          />
          <img
            src="./images/main/img_slogan_main.png"
            className="visual_img front-2"
            alt=""
            id="id_3"
          />
          <img
            src="./images/main/img_slogan_main.png"
            className="visual_img front-3"
            alt=""
            id="id_4"
          />
        </p>
        <p className="visible">
          <img
            src="./images/main/img_slogan_main2.png"
            className="visual_img back"
            alt=""
            id="id_5"
          />
          <img
            src="./images/main/img_slogan_main2.png"
            className="visual_img front-1"
            alt=""
            id="id_6"
          />
          <img
            src="/images/main/img_slogan_main2.png"
            className="visual_img front-2"
            alt=""
            id="id_7"
          />
          <img
            src="/images/main/img_slogan_main2.png"
            className="visual_img front-3"
            alt=""
            id="id_8"
          />
        </p>
        <p className="visible">
          <img
            src="/images/main/img_slogan_main3.png"
            className="visual_img back"
            alt=""
            id="id_9"
          />
          <img
            src="/images/main/img_slogan_main3.png"
            className="visual_img front-1"
            alt=""
            id="id_10"
          />
          <img
            src="/images/main/img_slogan_main3.png"
            className="visual_img front-2"
            alt=""
            id="id_11"
          />
          <img
            src="/images/main/img_slogan_main3.png"
            className="visual_img front-3"
            alt=""
            id="id_12"
          />
        </p>
      </div>

      <div>경기일정 들어갈자리</div>
      <div>
        <Photo />
      </div>
    </article>
  );
}

export default Article;
