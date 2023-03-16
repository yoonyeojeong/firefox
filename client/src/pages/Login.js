import React from "react";
import "../css/common.css";
import "../css/reset.css";
import "../css/Login.css";
import "../css/main.css";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user_id, setUser_id] = useState("");
  const [user_pw, setUser_pw] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(user_id, user_pw)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  // 임시 회원가입
  /*
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(user_id, user_pw)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };*/

  return (
    <div className="wrapper">
      <h1 className="login_title">LOGIN</h1>
      <h4>파이어폭스 회원 로그인</h4>
      <div className="user_id">
        <p>아이디</p>
        <input
          value={user_id}
          onChange={(e) => setUser_id(e.target.value)}
          className="login_form"
          type="text"
          id="user_id"
          placeholder="  ID"
        />
      </div>
      <div className="user_pw">
        <p>비밀번호</p>
        <input
          value={user_pw}
          onChange={(e) => setUser_pw(e.target.value)}
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
        <button type="submit" onClick={signIn} className="button1">
          로그인
        </button>
      </div>
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
