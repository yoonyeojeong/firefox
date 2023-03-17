import React from "react";
import "../css/common.css";
import "../css/reset.css";
import "../css/main.css";
import "../css/FindPw.css";
import { Link } from "react-router-dom";

function FindPw() {
  return (
    <div className="findpw">
      <h1 className="findpw_title">비밀번호 찾기</h1>
      <h4>파이어폭스 비밀번호 찾기</h4>
      {/* 아이디 */}
      <div className="findpw_user_id">
        <p>아이디</p>
        <input className="findpw_form" type="text" placeholder="  ID" />
      </div>

      {/* 회원이름 */}
      <div className="findpw_user_name">
        <p>이름</p>
        <input className="findpw_form" type="text" placeholder="  ex) 홍길동" />
      </div>

      {/* 회원 전화번호 */}
      <div className="findpw_user_num">
        <p>전화번호 (회원 가입 시 입력한 정보를 정확히 기입해 주세요.)</p>
        <select className="findpw_form_num">
          <option>010</option>
          <option>011</option>
        </select>
        &nbsp;&nbsp;-&nbsp;&nbsp;
        <input className="findpw_form_num" type="text" />
        &nbsp;&nbsp;-&nbsp;&nbsp;
        <input className="findpw_form_num" type="text" />
      </div>

      <div className="div_button1">
        <button type="submit" className="findpw_button1">
          비밀번호 찾기
        </button>
      </div>
      <br />
      <div className="findpw_button">
        <span className="findpw_txt_q">
          아이디가 기억이 안나세요?&nbsp;&nbsp;&nbsp;
        </span>
        <Link to="/findid">
          <button type="button" className="findpw_button2">
            아이디 찾기
          </button>
        </Link>
      </div>
    </div>
  );
}
export default FindPw;
