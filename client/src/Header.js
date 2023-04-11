import React, { useEffect, useState } from "react";
import "./css/Header.css";
import "./css/reset.css";
import "./css/common.css";
import "./css/main.css";
import live from "./images/common/Live.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Header() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const logout = () => {
    console.log("로그아웃 함수 실행");
    if (isLogin && window.confirm("로그아웃 하시겠습니까?")) {
      axios({
        url: "http://localhost:5000/logout",
        method: "POST",
        withCredentials: true,
      }).then((result) => {
        if (result.status === 200) {
          window.open("/", "_self");
        }
      });
      navigate("/");
    }
  };

  useEffect(() => {
    try {
      axios({
        url: "http://localhost:5000/login/success",
        method: "GET",
        withCredentials: true,
      })
        .then((result) => {
          if (result.data) {
            setIsLogin(true);
            console.log("Header useEffect");
          }
        })
        .catch((error) => {
          console.log("로그아웃상태");
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <header id="header">
        <h1>
          <Link to="/" id="teamLogo">
            FireFOX
          </Link>
        </h1>
        <form id="menuForm" name="menuForm"></form>
        <div className="menu_wrap">
          <button type="button" className="menuToggle">
            메뉴열기
          </button>
          <div className="menu_effect">
            <nav id="menu">
              <ul>
                <li>
                  <NavLink
                    to="/aboutTeam/aboutTeam"
                    style={({ isActive }) => ({
                      color: isActive ? "rgb(255,192,0" : "",
                    })}
                  >
                    <span></span>
                    <span className="width"></span>FireFOX
                  </NavLink>
                  <ul className="hideMenu">
                    <li>
                      <Link to="/aboutTeam/aboutTeam">구단소개</Link>
                    </li>
                    <li>
                      <Link to="/aboutTeam/aboutCompany">그룹사소개</Link>
                    </li>
                    <li>
                      <Link to="/aboutTeam/aboutHistory">HISTORY</Link>
                    </li>
                    <li>
                      <Link to="/aboutTeam/aboutPark">야구장 소개</Link>
                      <ul>
                        <li>
                          <Link to="/aboutTeam/aboutPark/KOSMO">
                            KOSMO 본사 사옥
                          </Link>
                        </li>
                        <li>
                          <Link to="/aboutTeam/aboutPark/wolrd2nd">
                            월드메르디앙 2차
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/aboutTeam/aboutUs">기획의도</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/players/major_players">
                    <span></span>
                    <span className="width"></span>PLAYERS
                  </Link>
                  <ul className="hideMenu">
                    <li>
                      <Link to="/players/major_players">1군 선수</Link>
                    </li>
                    <li>
                      <Link to="/players/minor_players">2군 선수</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/game/major">
                    <span></span>
                    <span className="width"></span>GAME
                  </Link>
                  <ul className="hideMenu">
                    <li>
                      <Link to="/game/major">1군 경기일정</Link>
                    </li>
                    <li>
                      <Link to="/game/minor">2군 경기일정</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/fan/notice">
                    <span></span>
                    <span className="width"></span>FAN
                  </Link>
                  <ul className="hideMenu">
                    <li>
                      <Link to="/fan/notice">공지사항</Link>
                    </li>
                    <li>
                      <Link to="/fan/board">자유게시판</Link>
                    </li>
                    <li>
                      <Link to="/fan/gallery">갤러리</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/shop">
                    <span></span>
                    <span className="width"></span>SHOP
                  </Link>
                </li>
                <li>
                  <Link to="/ticket">
                    <span></span>
                    <span className="width"></span>TICKET
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.youtube.com/@KBO1982/streams"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span></span>
                    <span className="width"></span>LIVE
                    <img className="header_live" src={live} width="45" alt="" />
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="util_menu">
              <ul>
                <li>
                  <Link to={!isLogin && "/login"}>
                    <span onClick={logout}>{isLogin ? "LOGOUT" : "LOGIN"}</span>
                  </Link>
                </li>
                <li>
                  <Link to={isLogin ? "/mypage/checkout" : "/joinus"}>
                    <span> {isLogin ? "MY PAGE" : "JOIN US"}</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sns_menu">
              <ul>
                <li></li>
                <Link
                  to="https://youtube.com"
                  className="youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  youtube 바로가기
                </Link>
                <li></li>
                <Link
                  to="https:/facebook.com/"
                  className="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook 바로가기
                </Link>
                <li></li>
                <Link
                  to="https:/instagram.com/"
                  className="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram 바로가기
                </Link>
                <li></li>
                <Link
                  to="https:/twitter.com/"
                  className="twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  twitter 바로가기
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
