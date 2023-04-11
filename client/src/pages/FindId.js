/* eslint-disable */
import React, { useState } from "react";
import "../css/FindId.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function FindId() {
  const [users] = useFetch("http://localhost:5000/api/users");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    user_name: "",
    phone_num_head: "",
    phone_num_middle: "",
    phone_num_last: "",
  });

  const toFindPw = () => {
    navigate("/findpw");
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const findId = () => {
    var successSearch = 0;
    console.log("findId 실행");
    users &&
      users.map((item) => {
        if (
          item.user_name === user.user_name &&
          item.phone_num_head === user.phone_num_head &&
          item.phone_num_middle === user.phone_num_middle &&
          item.phone_num_last === user.phone_num_last
        ) {
          successSearch = 1;
          alert(`${user.user_name}님의 아이디는 ${item.user_id}입니다.`);
        }
      });
    setUser({
      user_name: "",
      phone_num_head: "",
      phone_num_middle: "",
      phone_num_last: "",
    });
    if (successSearch === 0) {
      alert("일치하는 회원정보가 없습니다.");
    }
  };
  return (
    <div className="findid">
      <h1 className="findid_title">아이디 찾기</h1>
      <h4>파이어폭스 회원 아이디 찾기</h4>
      <form onSubmit={findId}>
        {/* 회원이름 */}
        <div className="findid_user_name">
          <p>이름</p>
          <input
            className="findid_form"
            type="text"
            name="user_name"
            value={user.user_name}
            onChange={handleInputChange}
            placeholder="  ex) 홍길동"
          />
        </div>

        {/* 회원 생년월일 
        <div className="findid_user_bd">
          <p>생년월일</p>
          <span>
            <input
              className="findid_form_bd"
              type="number"
              max="99"
              placeholder="   년"
            />
          </span>
          <span>
            <input
              className="findid_form_bd"
              type="number"
              max="12"
              placeholder="   월"
            />
          </span>
          <span>
            <input
              className="findid_form_bd"
              type="number"
              max="31"
              placeholder="   일"
            />
          </span>

          양력 음력버튼 
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
        </div>*/}

        {/* 회원 전화번호 */}
        <div className="findid_user_num">
          <p>전화번호</p>
          <select
            className="findid_form_num"
            name="phone_num_head"
            value={user.phone_num_head}
            onChange={handleInputChange}
          >
            <option value="">선택하기</option>
            <option value="010">010</option>
            <option value="011">011</option>
          </select>
          &nbsp;&nbsp;-&nbsp;&nbsp;
          <input
            className="findid_form_num"
            type="text"
            name="phone_num_middle"
            value={user.phone_num_middle}
            onChange={handleInputChange}
          />
          &nbsp;&nbsp;-&nbsp;&nbsp;
          <input
            className="findid_form_num"
            type="text"
            name="phone_num_last"
            value={user.phone_num_last}
            onChange={handleInputChange}
          />
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
          <button type="submit" className="findid_button2" onClick={toFindPw}>
            비밀번호 찾기
          </button>
        </div>
      </form>
    </div>
  );
}

export default FindId;
