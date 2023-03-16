import React from "react";
import "../css/common.css";
import "../css/reset.css";
import "../css/Admin.css";
import "../css/main.css";
import { Link } from "react-router-dom";
import AdminSidemenu from "./AdminSidemenu";
function Admin() {
  return (
    <div className="administrator">
      <AdminSidemenu />
      <h1>관리자 전용 페이지입니다.</h1>
      <Link to="/admin/qna">1대1 문의 답변</Link>
      <div className="photo_register">사진 등록 부분</div>
      <div className="goods_register">상품 등록 부분</div>
    </div>
  );
}

export default Admin;
