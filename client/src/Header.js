import React, { useState } from "react";
import "./css/Header.css";
import "./css/reset.css";
import "./css/common.css";
import "./css/main.css";
import "./css/Login.css";
import live from "./images/common/Live.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import LoginModal from "./components/LoginModal";
const userInfoInitial = () => {
  return {
    user_id: "",
    user_pw: "",
  };
};

function Header({ isLogin }) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(() => {
    return userInfoInitial();
  });

  const login = () => {
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
  };
  const [modalOpen, setModalOpen] = useState(false);
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
    } else if (isLogin) {
    } else {
      setModalOpen(true);
    }
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const goToJoinUs = () => {
    navigate("/joinus");
    setModalOpen(false);
  };

  const goToFindID = () => {
    setModalOpen(false);
    navigate("/findid");
  };

  const goToFindPW = () => {
    setModalOpen(false);
    navigate("/findpw");
  };

  const goToMyPage = () => {
    if (isLogin) {
      navigate("/mypage/checkout");
    } else {
      navigate("/joinus");
    }
  };
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
                  <React.Fragment>
                    <button
                      className="header_util_menu_button"
                      onClick={logout}
                    >
                      {isLogin ? "LOGOUT" : "LOGIN"}
                    </button>
                    <LoginModal open={modalOpen} close={closeModal}>
                      <div className="wrapper">
                        <h1 className="login_title">LOGIN</h1>
                        <h4>파이어폭스 회원 로그인</h4>
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
                        <button onClick={login} className="login_button1">
                          로그인
                        </button>
                        <br />
                        <div className="joinus_button">
                          <span className="login_txt_q">
                            파이어 폭스 회원이 아니세요?&nbsp;&nbsp;&nbsp;
                          </span>
                          <button onClick={goToJoinUs} className="button2">
                            JOIN US
                          </button>
                        </div>
                        <div className="login_find">
                          <button onClick={goToFindID}>아이디 찾기</button>
                          <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                          <button onClick={goToFindPW}>비밀번호 찾기</button>
                        </div>
                      </div>
                    </LoginModal>
                  </React.Fragment>
                </li>
                <li>
                  <button
                    className="header_util_menu_button"
                    onClick={goToMyPage}
                  >
                    {isLogin ? "MY PAGE" : "JOIN US"}
                  </button>
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
