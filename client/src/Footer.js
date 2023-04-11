import React from "react";
import "./css/common.css";
import "./css/reset.css";
import "./css/footer.css";
import axios from "axios";
import Login from "./pages/Login";
import { useEffect, useState } from "react";

function Footer() {
  const accessToken = () => {
    axios({
      url: "http://localhost:5000/accesstoken",
      method: "GET",
      withCredentials: true,
    });
  };

  const refreshToken = () => {
    axios({
      url: "http://localhost:5000/refreshtoken",
      method: "GET",
      withCredentials: true,
    });
  };

  return (
    <footer id="footer">
      <h1>
        <a href="/">Fire FOX</a>
      </h1>

      <div className="f_info">
        <ul>
          <li>
            서울 금천구 가산디지털2로 123 <b>KOSMO</b>
          </li>
          <li>담당강사 엄호식</li>
          <li>제 2강의실 열정의 방</li>
        </ul>
        <ul>
          <li>TEL 02-2025-8523</li>
          <li>FAX 02-2025-4113</li>
        </ul>
      </div>

      <div className="f_menu">
        <ul>
          <li>
            <a href="/ETC/TM/ETCTMLN01.do">법적고지</a>
          </li>
          <li>
            <a href="/ETC/TM/ETCTMPP01.do">
              <em className="orange2 fw-700">개인정보 처리방침</em>
            </a>
          </li>
          <li>
            <a href="/ETC/TM/ETCTMTS01.do">이용약관</a>
          </li>
          <li>
            <a href="/ETC/CU/ETCCUCUI01.do">고객문의</a>
          </li>
          <li>
            <a href="/mypage/QnA">1:1문의</a>
          </li>
          <li>
            <a href="/ETC/TM/ETCTMSI01.do">사이트맵</a>
          </li>
        </ul>

        <button onClick={accessToken} className="App-link">
          get Access Token
        </button>
        <br />
        <button onClick={refreshToken} className="App-link">
          get Refresh Token
        </button>
        <br />
      </div>

      <p className="copyright">
        <span>KOSMO</span> 화이팅
      </p>
    </footer>
  );
}

export default Footer;
