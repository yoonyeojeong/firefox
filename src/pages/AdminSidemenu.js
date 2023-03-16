import React from "react";
import "../css/common.css";
import "../css/reset.css";
import "../css/main.css";
import "../css/AdminSidemenu.css";
import { NavLink } from "react-router-dom";

function AdminSidemenu() {
  return (
    <div className="admin_sidemenu">
      <NavLink
        to="/admin/qna"
        style={({ isActive }) => ({ color: isActive ? "rgb(255,192,0" : "" })}
      >
        <div className="admin_sidemenu_option">고객문의</div>
      </NavLink>
      <NavLink
        to="/admin/players"
        style={({ isActive }) => ({ color: isActive ? "rgb(255,192,0" : "" })}
      >
        <div className="admin_sidemenu_option">선수관리</div>
      </NavLink>
      <NavLink
        to="/admin/schedule"
        style={({ isActive }) => ({ color: isActive ? "rgb(255,192,0" : "" })}
      >
        <div className="admin_sidemenu_option">일정관리</div>
      </NavLink>
      <NavLink
        to="/admin/goods"
        style={({ isActive }) => ({ color: isActive ? "rgb(255,192,0" : "" })}
      >
        <div className="admin_sidemenu_option">굿즈관리</div>
      </NavLink>
      <NavLink
        to="/admin/user"
        style={({ isActive }) => ({ color: isActive ? "rgb(255,192,0" : "" })}
      >
        <div className="admin_sidemenu_option">회원관리</div>
      </NavLink>
      <NavLink
        to="/admin/notice"
        style={({ isActive }) => ({ color: isActive ? "rgb(255,192,0" : "" })}
      >
        <div className="admin_sidemenu_option">공지사항</div>
      </NavLink>
      <NavLink
        to="/admin/board"
        style={({ isActive }) => ({ color: isActive ? "rgb(255,192,0" : "" })}
      >
        <div className="admin_sidemenu_option">게시판관리</div>
      </NavLink>
      <NavLink
        to="/admin/photo"
        style={({ isActive }) => ({ color: isActive ? "rgb(255,192,0" : "" })}
      >
        <div className="admin_sidemenu_option">사진관리</div>
      </NavLink>
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "rgb(255,192,0" : "" })}
      >
        <div className="admin_sidemenu_option">로그아웃</div>
      </NavLink>
    </div>
  );
}

export default AdminSidemenu;
