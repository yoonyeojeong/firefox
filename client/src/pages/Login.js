import React from "react";
import "../css/Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useFetch from "../hooks/useFetch";

function Login() {
  const [user] = useFetch("http://localhost:5000/api/users");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_id: "",
    user_pw: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const userData = () => {
    const url = "/api/login/" + formData.user_id;
    const newFormData = new FormData();
    newFormData.append("user_id", formData.user_id);
    newFormData.append("user_pw", formData.user_pw);

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    return axios.post(url, newFormData, config);
  };

  const LoginFunc = (e) => {
    var checkUser = [];
    checkUser =
      user &&
      user.map((u) => {
        if (u.user_id === formData.user_id && u.user_pw === formData.user_pw) {
          return true;
        } else {
          return false;
        }
      });

    if (checkUser.includes(true)) {
      e.preventDefault();
      userData().then((res) => {
        console.log(res.data);
      });

      checkUser = [];

      if (formData.user_id === "admin") {
        setFormData({
          user_id: "",
          user_pw: "",
        });
        navigate("/admin/qna");
      } else {
        setFormData({
          user_id: "",
          user_pw: "",
        });
        navigate("/");
      }

      window.location.reload();
    } else {
      alert("회원정보가 일치하지 않습니다.");
      window.location.reload();
    }
  };

  return (
    <div className="wrapper">
      <h1 className="login_title">LOGIN</h1>
      <h4>파이어폭스 회원 로그인</h4>
      <form onSubmit={LoginFunc}>
        <div className="user_id">
          <p>아이디</p>
          <input
            onChange={handleInputChange}
            name="user_id"
            value={formData.user_id}
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
            value={formData.user_pw}
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
