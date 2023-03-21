import React from "react";
import "../css/Sidemenu.css";
import { NavLink } from "react-router-dom";

function Sidemenu() {
  return (
    <div className="sidemenu">
      <NavLink
        to="/mypage/checkout"
        style={({ isActive }) => ({ color: isActive ? "rgb(255,192,0" : "" })}
      >
        <div className="sidemenu_option">장바구니</div>
      </NavLink>
      <NavLink
        to="/mypage/myinfo"
        style={({ isActive }) => ({ color: isActive ? "rgb(255,192,0" : "" })}
      >
        <div className="sidemenu_option">내 정보 수정</div>
      </NavLink>
      <NavLink
        to="/temp"
        style={({ isActive }) => ({ color: isActive ? "rgb(255,192,0" : "" })}
      >
        <div className="sidemenu_option">1대1 문의</div>
      </NavLink>
    </div>
  );
}

export default Sidemenu;
