import React from "react";
import "../css/FindId.css";
import { Link } from "react-router-dom";

function FindId() {
  return (
    <div className="findid">
      <h1 className="findid_title">아이디 찾기</h1>
      <h4>파이어폭스 회원 아이디 찾기</h4>

      {/* 회원이름 */}
      <div className="findid_user_name">
        <p>이름</p>
        <input className="findid_form" type="text" placeholder="  ex) 홍길동" />
      </div>

      {/* 회원 생년월일 */}
      <div className="findid_user_bd">
        <p>생년월일</p>
        <span>
          <input className="findid_form_bd" type="text" placeholder="   년" />
        </span>
        <span>
          <input className="findid_form_bd" type="text" placeholder="   월" />
        </span>
        <span>
          <input className="findid_form_bd" type="text" placeholder="   일" />
        </span>

        {/* 양력 음력버튼 */}
        <ul>
          <li>
            <input
              className="findid_radio"
              name="birthday"
              type="radio"
              value="solar_calendar"
              checked="checked"
            />
            &nbsp;&nbsp;양력 &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              className="findid_radio"
              name="birthday"
              type="radio"
              value="lunar_calendar"
            />
            &nbsp;&nbsp;음력
          </li>
        </ul>
      </div>

      {/* 회원 전화번호 */}
      <div className="findid_user_num">
        <p>전화번호</p>
        <select className="findid_form_num">
          <option>010</option>
          <option>011</option>
        </select>
        &nbsp;&nbsp;-&nbsp;&nbsp;
        <input className="findid_form_num" type="text" />
        &nbsp;&nbsp;-&nbsp;&nbsp;
        <input className="findid_form_num" type="text" />
      </div>

      <div className="div_button1">
        <button type="submit" className="findid_button1">
          아이디 찾기
        </button>
      </div>
      <br />
      <div className="findid_button">
        <span className="findid_txt_q">
          비밀번호가 기억이 안나세요?&nbsp;&nbsp;&nbsp;
        </span>
        <Link to="/findpw">
          <button type="button" className="findid_button2">
            비밀번호 찾기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FindId;
