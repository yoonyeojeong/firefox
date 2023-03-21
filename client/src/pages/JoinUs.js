import React from "react";
import "../css/JoinUs.css";
import { Link } from "react-router-dom";

function JoinUs() {
  return (
    <div className="join_us">
      <h1 className="join_us_title">회원가입</h1>
      <h4>파이어폭스의 회원이 되어주세요!</h4>

      {/* 아이디 */}
      <div className="join_us_user_id">
        <p>아이디</p>
        <input className="join_us_form" type="text" placeholder="  ID" />
      </div>

      {/* 비밀번호 */}
      <div className="join_us_user_pw">
        <p>비밀번호</p>
        <input
          className="join_us_form"
          type="password"
          placeholder="  Password"
        />
      </div>

      {/* 비밀번호 확인 */}
      <div className="join_us_user_pw">
        <p>비밀번호 확인</p>
        <input
          className="join_us_form"
          type="password"
          placeholder="  Password"
        />
      </div>

      {/* 회원이름 */}
      <div className="join_us_user_name">
        <p>이름</p>
        <input
          className="join_us_form"
          type="text"
          placeholder="  ex) 홍길동"
        />
      </div>

      {/* 성별 */}
      <div className="join_us_user_gender">
        <p>성별</p>
        <ul>
          <li>
            <input
              className="join_radio"
              name="sex"
              type="radio"
              value="man"
              checked="checked"
            />
            &nbsp;&nbsp;남성 &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              className="join_radio"
              name="sex"
              type="radio"
              value="woman"
            />
            &nbsp;&nbsp;여성
          </li>
        </ul>
      </div>

      {/* 회원 생년월일 */}
      <div className="join_us_user_bd">
        <p>생년월일</p>
        <input
          className="join_us_form"
          type="text"
          placeholder=" 6자리로 입력해주세요.  ex) 860101"
        />
      </div>

      {/* 회원 이메일 */}
      <div className="join_us_user_email">
        <p>이메일</p>
        <input className="join_us_form_e" type="text" />
        &nbsp;&nbsp;@&nbsp;&nbsp;
        <select className="join_us_form_e">
          <option>선택</option>
          <option>naver.com</option>
          <option>hanmail.net</option>
          <option>daum.net</option>
          <option>gmail.com</option>
        </select>
      </div>

      {/* 회원 전화번호 */}
      <div className="join_us_user_num">
        <p>전화번호</p>
        <select className="join_us_form_num">
          <option>010</option>
          <option>011</option>
        </select>
        &nbsp;&nbsp;-&nbsp;&nbsp;
        <input className="join_us_form_num" type="text" />
        &nbsp;&nbsp;-&nbsp;&nbsp;
        <input className="join_us_form_num" type="text" />
      </div>

      {/* 회원 주소 */}
      <div className="join_us_user_address">
        <p>주소</p>
        <input className="join_us_form" type="text" />
      </div>

      <div className="div_button1">
        <button type="submit" className="button1">
          회원가입 하기
        </button>
      </div>
      <br />
      <div className="joinus_button">
        <span className="login_txt_q">
          로그인 화면으로 돌아가고 싶으신가요?&nbsp;&nbsp;&nbsp;
        </span>
        <Link to="/joinus">
          <button className="button2" type="button">
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );
}
export default JoinUs;
