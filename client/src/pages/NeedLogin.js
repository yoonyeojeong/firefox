import React from "react";
import "../css/NeedLogin.css";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

function NeedLogin() {
  return (
    <div className="need_login">
      <h2 className="need_login_icon">
        <BsFillExclamationTriangleFill />
      </h2>
      <h2 className="need_login_title"> 로그인이 필요한 페이지 입니다.</h2>
    </div>
  );
}

export default NeedLogin;
