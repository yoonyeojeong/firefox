import React from "react";
import "../css/article.css";
import slogan_main from "../images/main/img_slogan_main.png";
import tempImg from "../images/temp.jpg";
import Photo from "./Photo";

function Article() {
  // const [user, setUser] = useState();
  // const [isLogin, setIsLogin] = useState(false);
  // useEffect(() => {
  //   try {
  //     axios({
  //       url: "http://localhost:5000/login/success",
  //       method: "GET",
  //       withCredentials: true,
  //     })
  //       .then((result) => {
  //         if (result.data) {
  //           setIsLogin(true);
  //           setUser(result.data);
  //           console.log("Header useEffect");
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("로그아웃상태");
  //         console.log(error);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

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

      <div>
        <Photo />
      </div>
    </article>
  );
}

export default Article;
