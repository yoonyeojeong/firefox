import React from "react";
import "../css/Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const userInfoInitial = () => {
  return {
    user_id: "",
    user_pw: "",
  };
};

function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(() => {
    return userInfoInitial();
  });

  const login = () => {
    if (window.confirm("로그인 하시겠습니까?")) {
      axios({
        url: "http://localhost:5000/login",
        method: "POST",
        withCredentials: true,
        data: {
          user_id: userInfo.user_id,
          user_pw: userInfo.user_pw,
        },
      })
        .then((result) => {
          console.log("result status : ", result.status);
          if (result.status === 200 && userInfo.user_id === "admin") {
            window.open("/", "_self");
            navigate("/admin/qna");
          } else if (result.status === 200 && userInfo.user_id !== "admin") {
            window.open("/", "_self");
            navigate("/");
          }
          if (result.status === 403) {
            alert("일치하는 회원 정보가 없습니다.");
          }
        })
        .catch(() => {
          alert("일치하는 회원 정보가 없습니다.");
        });
    } else {
      alert("로그인 취소");
    }
  };

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  return (
    <div className="wrapper">
      <h1 className="login_title">LOGIN</h1>
      <h4>파이어폭스 회원 로그인</h4>
      <form onSubmit={login}>
        <div className="user_id">
          <p>아이디</p>
          <input
            onChange={handleInputChange}
            name="user_id"
            value={userInfo.user_id}
            className="login_form"
            type="text"
            id="user_id"
            placeholder="  ID"
          />
        </div>
        <div className="user_pw">
          <p>비밀번호</p>
          <input
            onChange={handleInputChange}
            name="user_pw"
            value={userInfo.user_pw}
            className="login_form"
            type="password"
            id="user_pw"
            placeholder="  Password"
          />
        </div>
        <div className="login_txt_left">
          <input type="checkbox" id="save_id" />
          <span>아이디 저장</span>
        </div>
        <div className="div_button1">
          <button type="submit" className="button1">
            로그인
          </button>
        </div>
      </form>
      <br />
      <div className="joinus_button">
        <span className="login_txt_q">
          파이어 폭스 회원이 아니세요?&nbsp;&nbsp;&nbsp;
        </span>
        <Link to="/joinus">
          <button className="button2" type="button">
            JOIN US
          </button>
        </Link>
      </div>
      <div className="login_find">
        <span>
          <Link to="/findid">아이디 찾기</Link>
        </span>
        <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
        <span>
          <Link to="/findpw">비밀번호 찾기</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
